import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map } from 'rxjs';

import { ForecastMode, WeatherForecastApiService } from '@bp/weather-forecast/services';

import * as WeatherOfCityActions from './weather-of-city.actions';
import * as WeatherOfCityDailyActions from './weather-of-city-daily.actions';
import * as WeatherOfCityHourlyActions from './weather-of-city-hourly.actions';

@Injectable()
export class WeatherOfCityEffects {

	loadWeatherOfCity$ = createEffect(() =>
		this.actions$.pipe(
			ofType(WeatherOfCityActions.loadWeatherOfCity),
			fetch({
				run: action => this.weatherForecastApiService.getWeatherForecastByCity(action.city, action.forecastMode).pipe(
					map(weatherOfCity => {
						if (action.forecastMode === ForecastMode.Daily) {
							return WeatherOfCityDailyActions.loadWeatherOfCityDailySuccess(
								{
									weatherOfCityDaily: {
										id: weatherOfCity.coordinate.name,
										weather: weatherOfCity.weather.daily,
										coordinate: weatherOfCity.coordinate,
									},
								},
							);
						} else if (action.forecastMode === ForecastMode.Hourly) {
							return WeatherOfCityHourlyActions.loadWeatherOfCityHourlySuccess(
								{
									weatherOfCityHourly: {
										id: weatherOfCity.coordinate.name,
										weather: weatherOfCity.weather.hourly,
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
		),
	);

	constructor(
		private readonly actions$: Actions,
		private readonly weatherForecastApiService: WeatherForecastApiService,
	) {
	}
}
