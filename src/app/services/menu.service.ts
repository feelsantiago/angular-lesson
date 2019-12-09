import { Injectable } from '@angular/core';

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

	get menuItems () {
		return this.menu;
	}
}
