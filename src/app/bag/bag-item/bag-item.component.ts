import { Component, Input } from '@angular/core';
import { BagService } from 'src/app/services/bag.service';

@Component({
	selector: 'bag-item-app',
	templateUrl: './bag-item.component.html',
	styleUrls: [ './bag-item.component.scss' ]
})
export class BagItemComponent {
	@Input('quantity') quantity: number;
	@Input('title') title: string;
	@Input('id') id: string;

	constructor (private readonly bagService: BagService) {}

	onIncrementClickHandle (id: string) {
		this.bagService.incrementItem(id);
	}

	onDecrementClickHandle (id: string) {
		this.bagService.decrementItem(id);
	}
}
