import { createAction, props } from '@ngrx/store';
import { WeatherOfCityDailyEntity } from './weather-of-city-daily.models';

export const loadWeatherOfCityDailySuccess = createAction(
	'[WeatherOfCityDaily/API] Load WeatherOfCityDaily Success',
	props<{ weatherOfCityDaily: WeatherOfCityDailyEntity }>(),
);
