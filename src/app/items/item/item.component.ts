import { Component, Input } from '@angular/core';

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
}
