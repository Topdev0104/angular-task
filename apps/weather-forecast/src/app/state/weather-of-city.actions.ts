import { createAction, props } from '@ngrx/store';
import { WeatherOfCityEntity } from './weather-of-city.models';

export const init = createAction('[WeatherOfCity Page] Init');

export const loadWeatherOfCity = createAction(
	'[WeatherOfCity/API] Load WeatherOfCity',
	props<{ city: string }>()
);

export const loadWeatherOfCitySuccess = createAction(
	'[WeatherOfCity/API] Load WeatherOfCity Success',
	props<{ weatherOfCity: WeatherOfCityEntity }>()
);

export const loadWeatherOfCityFailure = createAction(
	'[WeatherOfCity/API] Load WeatherOfCity Failure',
	props<{ error: any }>()
);
