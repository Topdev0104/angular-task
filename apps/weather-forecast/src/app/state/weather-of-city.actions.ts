import { createAction, props } from '@ngrx/store';

import { ForecastMode } from '@bp/weather-forecast/services';

import { WeatherOfCityEntity } from './weather-of-city.models';

export const init = createAction('[WeatherOfCity Page] Init');

export const loadWeatherOfCity = createAction(
	'[WeatherOfCity/API] Load WeatherOfCity',
	props<{ city: string, forecastMode: ForecastMode }>()
);

export const loadWeatherOfCitySuccess = createAction(
	'[WeatherOfCity/API] Load WeatherOfCity Success',
	props<{ weatherOfCity: WeatherOfCityEntity }>()
);

export const loadWeatherOfCityFailure = createAction(
	'[WeatherOfCity/API] Load WeatherOfCity Failure',
	props<{ error: any }>()
);
