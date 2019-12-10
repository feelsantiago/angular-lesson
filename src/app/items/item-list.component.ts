import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemService, Iitem } from '../services/item.service';
import { MenuService } from '../services/menu.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'item-list-app',
	templateUrl: './item-list.component.html',
	styleUrls: [ './item-list.component.scss' ]
})
export class ItemListComponent implements OnInit, OnDestroy {
	private items: Array<Iitem>;
	private menuSubscription: Subscription;

	constructor (private readonly itemService: ItemService, private readonly menuService: MenuService) {}

	ngOnInit (): void {
		this.items = this.itemService.itemList;
		this.menuSubscription = this.menuService.getSubject.subscribe(cuisine => {
			let filtered: Array<Iitem>;

			if (cuisine === 'all') {
				filtered = this.itemService.itemList;
			} else {
				filtered = this.itemService.itemList.filter(item => item.cuisine === cuisine);
			}

			this.items = filtered;
		}, console.log);
	}

	ngOnDestroy (): void {
		this.menuSubscription.unsubscribe();
	}
}
