import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map } from 'rxjs';

import { ForecastMode, WeatherForecastApiService } from '@bp/weather-forecast/services';

import * as WeatherOfCityActions from './weather-of-city.actions';

@Injectable()
export class WeatherOfCityEffects {
	init$ = createEffect(() =>
		this.actions$.pipe(
			ofType(WeatherOfCityActions.init),
			fetch({
				run: action => this.weatherForecastApiService.getWeatherForecastByCity('New york', ForecastMode.Daily).pipe(
					map(weatherOfCity => WeatherOfCityActions.loadWeatherOfCitySuccess({ weatherOfCity: { id: 1, ...weatherOfCity } })),
				),
				onError: (action, error) => {
					console.error('Error', error);
					return WeatherOfCityActions.loadWeatherOfCityFailure({ error });
				},
			}),
		),
	);

	constructor(
		private readonly actions$: Actions,
		private readonly weatherForecastApiService: WeatherForecastApiService,
	) {
	}
}
