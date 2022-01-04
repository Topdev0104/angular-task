import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { getAllWeatherOfCityHourly } from '../../state/weather-of-city-hourly.selectors';

@Component({
	selector: 'bp-hourly-forecast-table',
	templateUrl: './hourly-forecast-table.component.html',
	styleUrls: ['./hourly-forecast-table.component.scss'],
})
export class HourlyForecastTableComponent implements OnInit {

	weatherForHourly$ = this.store.select(getAllWeatherOfCityHourly);

	constructor(
		private store: Store,
	) {
	}

	ngOnInit() {
	}
}
