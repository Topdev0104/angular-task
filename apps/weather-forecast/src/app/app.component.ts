import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { loadWeatherOfCity } from './state/weather-of-city.actions';
import { getAllWeatherOfCity } from './state/weather-of-city.selectors';
import { ForecastMode } from '@bp/weather-forecast/services';

@Component({
	selector: 'bp-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

	ForecastMode = ForecastMode;

	weatherOfCities$ = this.store.select(getAllWeatherOfCity);

	form = this.fb.group({
		city: ['', Validators.required],
		forecastMode: [ForecastMode.Daily, Validators.required]
	});

	constructor(
		private readonly store: Store,
		private fb: FormBuilder,
	) {
	}

	ngOnInit(): void {
		console.log('init');
	}

	search() {
		this.store.dispatch(loadWeatherOfCity(this.form.value));
	}
}
