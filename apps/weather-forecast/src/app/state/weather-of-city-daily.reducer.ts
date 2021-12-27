import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as WeatherOfCityDailyActions from './weather-of-city-daily.actions';
import { WeatherOfCityDailyEntity } from './weather-of-city-daily.models';

export const WEATHEROFCITYDAILY_FEATURE_KEY = 'weatherOfCityDaily';

export interface State extends EntityState<WeatherOfCityDailyEntity> {
	loaded: boolean; // has the WeatherOfCityDaily list been loaded
}

export interface WeatherOfCityDailyPartialState {
	readonly [WEATHEROFCITYDAILY_FEATURE_KEY]: State;
}

export const weatherOfCityDailyAdapter: EntityAdapter<WeatherOfCityDailyEntity> =
	createEntityAdapter<WeatherOfCityDailyEntity>();

export const initialState: State = weatherOfCityDailyAdapter.getInitialState({
	// set initial required properties
	loaded: false,
});

const weatherOfCityDailyReducer = createReducer(
	initialState,
	on(WeatherOfCityDailyActions.loadWeatherOfCityDailySuccess, (state, { weatherOfCityDaily }) =>
		weatherOfCityDailyAdapter.upsertOne(weatherOfCityDaily, { ...state, loaded: true }),
	),
);

export function reducer(state: State | undefined, action: Action) {
	return weatherOfCityDailyReducer(state, action);
}
