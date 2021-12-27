import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { loadWeatherOfCity } from './state/weather-of-city.actions';
import { getAllWeatherOfCity } from './state/weather-of-city.selectors';

@Component({
	selector: 'bp-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

	weatherOfCities$ = this.store.select(getAllWeatherOfCity);

	form = this.fb.group({
		city: ['', Validators.required],
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
