import { Component, OnInit, OnDestroy } from '@angular/core';
import { IBagItem, BagService } from '../services/bag.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'bag-app',
	templateUrl: './bag.component.html',
	styleUrls: [ './bag.component.scss' ]
})
export class BagComponent implements OnInit, OnDestroy {
	private bagItems: Array<IBagItem>;
	private bagSubscription: Subscription;

	total: number = 0;

	constructor (private readonly bagService: BagService) {}

	ngOnInit (): void {
		this.bagItems = this.bagService.bagItems;
		this.bagService.bagEvent.subscribe((total: number) => (this.total = total));
	}

	ngOnDestroy (): void {
		this.bagSubscription.unsubscribe();
	}
}
