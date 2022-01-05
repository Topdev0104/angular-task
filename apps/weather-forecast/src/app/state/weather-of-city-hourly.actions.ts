import { createAction, props } from '@ngrx/store';
import { WeatherOfCityHourlyEntity } from './weather-of-city-hourly.models';

export const loadWeatherOfCityHourlySuccess = createAction(
	'[WeatherOfCityHourly/API] Load WeatherOfCityHourly Success',
	props<{ weatherOfCityHourly: WeatherOfCityHourlyEntity }>()
);
