import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { MenuService } from './services/menu.service';
import { ItemListComponent } from './items/item-list.component';
import { ItemComponent } from './items/item/item.component';
import { ItemService } from './services/item.service';
import { BagComponent } from './bag/bag.component';
import { BagItemComponent } from './bag/bag-item/bag-item.component';
import { BagService } from './services/bag.service';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		MenuComponent,
		MenuItemComponent,
		ItemListComponent,
		ItemComponent,
		BagComponent,
		BagItemComponent
	],
	imports: [ BrowserModule, AppRoutingModule ],
	providers: [ MenuService, ItemService, BagService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
