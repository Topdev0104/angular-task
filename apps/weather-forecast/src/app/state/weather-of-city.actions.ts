import { createAction, props } from '@ngrx/store';

import { ForecastMode } from '@bp/weather-forecast/services';

export const loadWeatherOfCity = createAction(
	'[WeatherOfCity/API] Load WeatherOfCity',
	props<{ city: string, forecastMode: ForecastMode }>(),
);

export const loadWeatherOfCitySuccess = createAction(
	'[WeatherOfCity/API] Load WeatherOfCity Success',
);

export const loadWeatherOfCityFailure = createAction(
	'[WeatherOfCity/API] Load WeatherOfCity Failure',
	props<{ error: any }>(),
);
