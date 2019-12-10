import { Component } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
	selector: 'header-app',
	templateUrl: './header.component.html',
	styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent {
	search: string = '';

	constructor (private readonly searchService: SearchService) {}

	onValueChange () {
		this.searchService.searchEvent.next(this.search);
	}
}
