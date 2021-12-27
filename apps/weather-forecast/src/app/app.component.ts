import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { init } from './state/weather-of-city.actions';
import { getAllWeatherOfCity } from './state/weather-of-city.selectors';

@Component({
	selector: 'bp-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

	weatherOfCities$ = this.store.select(getAllWeatherOfCity);

	constructor(
		private readonly store: Store
	) {
	}

	ngOnInit(): void {
		this.store.dispatch(init());
	}
}
