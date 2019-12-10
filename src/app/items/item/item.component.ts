import { Component, Input } from '@angular/core';
import { BagService } from 'src/app/services/bag.service';

@Component({
	selector: 'item-app',
	templateUrl: './item.component.html',
	styleUrls: [ './item.component.scss' ]
})
export class ItemComponent {
	@Input('id') id: string;
	@Input('title') title: string;
	@Input('cuisine') cuisine: string;
	@Input('price') price: number;

	constructor (private readonly bagService: BagService) {}

	onHandleClick (id: string, title: string, cuisine: string, price: number) {
		this.bagService.addItemToBag({ id, title, cuisine, price });
	}
}
