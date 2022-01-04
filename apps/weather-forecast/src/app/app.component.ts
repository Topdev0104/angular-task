import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';

import { ForecastMode } from '@bp/weather-forecast/services';

import { loadWeatherOfCity } from './state/weather-of-city.actions';
import { getWeatherOfCityLoading } from './state/weather-of-city.selectors';

@Component({
	selector: 'bp-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {

	ForecastMode = ForecastMode;

	form = this.fb.group({
		city: ['', Validators.required],
		forecastMode: [ForecastMode.Daily, Validators.required],
	});

	loading$ = this.store.select(getWeatherOfCityLoading);

	private unsubscribeAll: Subject<null> = new Subject<null>();

	constructor(
		private readonly store: Store,
		private fb: FormBuilder,
	) {
	}

	ngOnInit(): void {
		this.form.get('forecastMode')?.valueChanges.pipe(
			takeUntil(this.unsubscribeAll),
		).subscribe(() => {
			console.log('something');
		});
	}

	ngOnDestroy() {
		this.unsubscribeAll.next(null);
		this.unsubscribeAll.complete();
	}

	search() {
		if (this.form.invalid) {
			alert('Please enter city name.');
		} else {
			this.store.dispatch(loadWeatherOfCity(this.form.value));
		}
	}
}
