import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map } from 'rxjs';

import { WeatherForecastApiService } from '@bp/weather-forecast/services';

import * as WeatherOfCityActions from './weather-of-city.actions';

@Injectable()
export class WeatherOfCityEffects {

	loadWeatherOfCity$ = createEffect(() =>
		this.actions$.pipe(
			ofType(WeatherOfCityActions.loadWeatherOfCity),
			fetch({
				run: action => this.weatherForecastApiService.getWeatherForecastByCity(action.city, action.forecastMode).pipe(
					map(weatherOfCity =>
						WeatherOfCityActions.loadWeatherOfCitySuccess(
							{ weatherOfCity: { id: weatherOfCity.coordinate.name, ...weatherOfCity } },
						),
					),
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
