import { Component, OnInit } from '@angular/core';
import { ItemService, Iitem } from '../services/item.service';
import { MenuService } from '../services/menu.service';

@Component({
	selector: 'item-list-app',
	templateUrl: './item-list.component.html',
	styleUrls: [ './item-list.component.scss' ]
})
export class ItemListComponent implements OnInit {
	private items: Array<Iitem>;

	constructor (private readonly itemService: ItemService, private readonly menuService: MenuService) {}

	ngOnInit (): void {
		this.items = this.itemService.itemList;
		this.menuService.getSubject.subscribe(cuisine => {
			let filtered: Array<Iitem>;

			if (cuisine === 'all') {
				filtered = this.itemService.itemList;
			} else {
				filtered = this.itemService.itemList.filter(item => item.cuisine === cuisine);
			}

			this.items = filtered;
		}, console.log);
	}
}
