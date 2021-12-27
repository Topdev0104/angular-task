import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as WeatherOfCityActions from './weather-of-city.actions';

@Injectable()
export class WeatherOfCityEffects {
	init$ = createEffect(() =>
		this.actions$.pipe(
			ofType(WeatherOfCityActions.init),
			fetch({
				run: action => {
					console.log('loading weather of city');
					// Your custom service 'load' logic goes here. For now just return a success action...
					return WeatherOfCityActions.loadWeatherOfCitySuccess({ weatherOfCity: [] });
				},
				onError: (action, error) => {
					console.error('Error', error);
					return WeatherOfCityActions.loadWeatherOfCityFailure({ error });
				},
			})
		)
	);

	constructor(private readonly actions$: Actions) {}
}
