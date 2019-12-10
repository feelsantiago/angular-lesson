import { Injectable } from '@angular/core';
import { Iitem } from './item.service';
import { Subject } from 'rxjs';

export interface IBagItem {
	quantity: number;
	item: Iitem;
}

@Injectable()
export class BagService {
	private readonly items: Array<IBagItem> = [];
	private readonly bagSubject: Subject<number>;

	constructor () {
		this.bagSubject = new Subject();
	}

	get bagItems () {
		return this.items;
	}

	get bagEvent () {
		return this.bagSubject;
	}

	public addItemToBag (item: Iitem) {
		if (this.items.length === 0) {
			this.items.push({ quantity: 1, item });
			return this.notifyTotalValue();
		}

		const finded: IBagItem = this.items.find(element => element.item.id === item.id);
		const result = finded ? (finded.quantity = ++finded.quantity) : this.items.push({ quantity: 1, item });

		this.notifyTotalValue();
	}

	public incrementItem (id: string) {
		const finded: IBagItem = this.items.find(element => element.item.id === id);
		if (!finded) return;

		finded.quantity = ++finded.quantity;
		this.notifyTotalValue();
	}

	public decrementItem (id: string) {
		const finded: IBagItem = this.items.find(element => element.item.id === id);
		if (!finded) return;

		finded.quantity = --finded.quantity;

		if (finded.quantity === 0) {
			const index = this.items.indexOf(finded);
			this.items.splice(index, 1);
		}

		this.notifyTotalValue();
	}

	private notifyTotalValue () {
		const total = this.items.reduce((acc, next) => acc + next.item.price * next.quantity, 0);
		this.bagSubject.next(total);
	}
}
