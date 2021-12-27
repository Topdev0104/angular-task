import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { init, loadWeatherOfCitySuccess } from './+state/weather-of-city.actions';

@Component({
	selector: 'bp-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

	constructor(
		private readonly store: Store
	) {
	}

	ngOnInit(): void {
		this.store.dispatch(init());
		this.store.dispatch(loadWeatherOfCitySuccess({ weatherOfCity: [] }));
	}
}
