import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';

import { ForecastMode } from '@bp/weather-forecast/services';
import { getWeatherOfCityError, getWeatherOfCityLoading } from './state/weather-of-city.selectors';
import { loadWeatherOfCity } from './state/weather-of-city.actions';

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
	error$ = this.store.select(getWeatherOfCityError);

	private unsubscribeAll: Subject<null> = new Subject<null>();

	constructor(
		private readonly store: Store,
		private fb: FormBuilder,
		private router: Router,
		private route: ActivatedRoute,
	) {
	}

	ngOnInit(): void {
		this.route.queryParams.pipe(
			takeUntil(this.unsubscribeAll),
		).subscribe(params => {
			this.form.get('city')?.setValue(params.city);
			this.form.get('forecastMode')?.setValue(params.forecastMode || ForecastMode.Daily);
			if (this.form.valid) {
				this.store.dispatch(loadWeatherOfCity(this.form.value));
			}
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
			const { city, forecastMode } = this.form.value;
			this.router.navigate([], { queryParams: { city, forecastMode } });
		}
	}
}
