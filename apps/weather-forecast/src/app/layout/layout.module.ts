import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
	declarations: [
		LayoutComponent,
		NavbarComponent,
	],
	imports: [
		CommonModule,
	],
	exports: [
		LayoutComponent,
	],
})
export class LayoutModule {
}
