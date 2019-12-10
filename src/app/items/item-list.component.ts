import { Component, OnInit } from '@angular/core';
import { ItemService, Iitem } from '../services/item.service';

@Component({
	selector: 'item-list-app',
	templateUrl: './item-list.component.html',
	styleUrls: [ './item-list.component.scss' ]
})
export class ItemListComponent implements OnInit {
	private items: Array<Iitem>;

	constructor (private readonly itemService: ItemService) {}

	ngOnInit (): void {
		this.items = this.itemService.itemList;
	}
}
