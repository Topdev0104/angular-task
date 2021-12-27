import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { ForecastMode } from '@bp/weather-forecast/services';

import { loadWeatherOfCity } from './state/weather-of-city.actions';
import { getAllWeatherOfCity } from './state/weather-of-city.selectors';
import { getAllWeatherOfCityDaily } from './state/weather-of-city-daily.selectors';
import { getAllWeatherOfCityHourly } from './state/weather-of-city-hourly.selectors';

@Component({
	selector: 'bp-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

	ForecastMode = ForecastMode;

	form = this.fb.group({
		city: ['', Validators.required],
		forecastMode: [ForecastMode.Daily, Validators.required],
	});

	weatherOfCity$ = this.store.select(getAllWeatherOfCity);
	weatherForDaily$ = this.store.select(getAllWeatherOfCityDaily);
	weatherForHourly$ = this.store.select(getAllWeatherOfCityHourly);

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
