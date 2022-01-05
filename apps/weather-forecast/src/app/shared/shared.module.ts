import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodayClockComponent } from './today-clock/today-clock.component';
import { DailyForecastTableComponent } from './daily-forecast-table/daily-forecast-table.component';
import { HourlyForecastTableComponent } from './hourly-forecast-table/hourly-forecast-table.component';

@NgModule({
	declarations: [
		TodayClockComponent,
		DailyForecastTableComponent,
		HourlyForecastTableComponent,
	],
	imports: [
		CommonModule,
	],
	exports: [
		TodayClockComponent,
		DailyForecastTableComponent,
		HourlyForecastTableComponent,
	],
})
export class SharedModule {
}
