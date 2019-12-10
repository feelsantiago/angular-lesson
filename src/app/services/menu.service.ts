import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface IMenu {
	img: string;
	text: string;
}

@Injectable()
export class MenuService {
	private readonly menu: Array<IMenu> = [
		{
			img: '',
			text: 'all'
		},
		{
			img: '',
			text: 'chinese'
		},
		{
			img: '',
			text: 'burgers'
		},
		{
			img: '',
			text: 'salad'
		},
		{
			img: '',
			text: 'cake'
		},
		{
			img: '',
			text: 'pizza'
		}
	];

	private readonly menuSubject: Subject<string>;

	constructor () {
		this.menuSubject = new Subject();
	}

	get menuItems () {
		return this.menu;
	}

	get getSubject () {
		return this.menuSubject;
	}
}
