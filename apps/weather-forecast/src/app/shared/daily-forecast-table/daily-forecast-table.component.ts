import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { getAllWeatherOfCityDaily } from '../../state/weather-of-city-daily.selectors';

@Component({
	selector: 'bp-daily-forecast-table',
	templateUrl: './daily-forecast-table.component.html',
	styleUrls: ['./daily-forecast-table.component.scss'],
})
export class DailyForecastTableComponent implements OnInit {

	weatherForDaily$ = this.store.select(getAllWeatherOfCityDaily);

	selectedCity = null;

	constructor(
		private store: Store
	) {
	}

	ngOnInit(): void {
	}

}
