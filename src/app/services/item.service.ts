import { Injectable } from '@angular/core';
import foods from '../../assets/menu.json';

export interface Iitem {
	id: string;
	title: string;
	price: number;
	cuisine: string;
}

@Injectable()
export class ItemService {
	private readonly items: Array<Iitem>;

	constructor () {
		this.items = foods.food;
	}

	get itemList () {
		return this.items;
	}
}
