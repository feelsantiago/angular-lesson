import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemService, Iitem } from '../services/item.service';
import { MenuService } from '../services/menu.service';
import { Subscription } from 'rxjs';
import { SearchService } from '../services/search.service';

@Component({
	selector: 'item-list-app',
	templateUrl: './item-list.component.html',
	styleUrls: [ './item-list.component.scss' ]
})
export class ItemListComponent implements OnInit, OnDestroy {
	private items: Array<Iitem>;
	private menuSubscription: Subscription;

	constructor (
		private readonly itemService: ItemService,
		private readonly menuService: MenuService,
		private readonly searchService: SearchService
	) {}

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

		this.searchService.searchEvent.subscribe(word => {
			if (!word || word === '' || word === ' ') {
				return (this.items = this.itemService.itemList);
			}

			this.items = this.itemService.itemList.filter(item =>
				item.title.toLocaleLowerCase().includes(word.toLocaleLowerCase())
			);
		});
	}

	ngOnDestroy (): void {
		this.menuSubscription.unsubscribe();
	}
}
