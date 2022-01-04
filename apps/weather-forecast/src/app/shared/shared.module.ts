import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodayClockComponent } from './today-clock/today-clock.component';

@NgModule({
	declarations: [
		TodayClockComponent,
	],
	imports: [
		CommonModule,
	],
	exports: [
		TodayClockComponent
	]
})
export class SharedModule {
}
