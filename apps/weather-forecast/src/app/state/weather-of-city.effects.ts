import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map } from 'rxjs';

import { ForecastMode, WeatherForecastApiService } from '@bp/weather-forecast/services';

import * as WeatherOfCityActions from './weather-of-city.actions';
import * as WeatherOfCityDailyActions from './weather-of-city-daily.actions';
import * as WeatherOfCityHourlyActions from './weather-of-city-hourly.actions';
import { Store } from '@ngrx/store';

@Injectable()
export class WeatherOfCityEffects {

	loadWeatherOfCity$ = createEffect(() =>
		this.actions$.pipe(
			ofType(WeatherOfCityActions.loadWeatherOfCity),
			fetch({
				run: action => this.weatherForecastApiService.getWeatherForecastByCity(action.city, action.forecastMode).pipe(
					map(weatherOfCity => {
						this.store.dispatch(WeatherOfCityActions.loadWeatherOfCitySuccess());
						if (action.forecastMode === ForecastMode.Daily) {
							return WeatherOfCityDailyActions.loadWeatherOfCityDailySuccess(
								{
									weatherOfCityDaily: {
										id: weatherOfCity.coordinate.name,
										// do not select first item because it is current time
										weather: weatherOfCity.weather.daily?.slice(1, 8),
										coordinate: weatherOfCity.coordinate,
									},
								},
							);
						} else if (action.forecastMode === ForecastMode.Hourly) {
							return WeatherOfCityHourlyActions.loadWeatherOfCityHourlySuccess(
								{
									weatherOfCityHourly: {
										id: weatherOfCity.coordinate.name,
										// do not select first item because it is current time
										weather: weatherOfCity.weather.hourly?.filter((item, index) => index % 3 === 0).slice(1, 9),
										coordinate: weatherOfCity.coordinate,
									},
								},
							);
						} else {
							return WeatherOfCityActions.loadWeatherOfCityFailure({ error: 'No weather found' });
						}
					}),
				),
				onError: (action, error) => {
					console.error('Error', error);
					return WeatherOfCityActions.loadWeatherOfCityFailure({ error });
				},
			}),
			// map(() => WeatherOfCityActions.loadWeatherOfCitySuccess())
		),
	);

	constructor(
		private readonly actions$: Actions,
		private readonly weatherForecastApiService: WeatherForecastApiService,
		private readonly store: Store
	) {
	}
}
