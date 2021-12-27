import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as WeatherOfCityHourlyActions from './weather-of-city-hourly.actions';
import { WeatherOfCityHourlyEntity } from './weather-of-city-hourly.models';

export const WEATHEROFCITYHOURLY_FEATURE_KEY = 'weatherOfCityHourly';

export interface State extends EntityState<WeatherOfCityHourlyEntity> {
	selectedId?: string | number; // which WeatherOfCityHourly record has been selected
	loaded: boolean; // has the WeatherOfCityHourly list been loaded
	error?: string | null; // last known error (if any)
}

export interface WeatherOfCityHourlyPartialState {
	readonly [WEATHEROFCITYHOURLY_FEATURE_KEY]: State;
}

export const weatherOfCityHourlyAdapter: EntityAdapter<WeatherOfCityHourlyEntity> =
	createEntityAdapter<WeatherOfCityHourlyEntity>();

export const initialState: State = weatherOfCityHourlyAdapter.getInitialState({
	// set initial required properties
	loaded: false,
});

const weatherOfCityHourlyReducer = createReducer(
	initialState,
	on(WeatherOfCityHourlyActions.loadWeatherOfCityHourlySuccess, (state, { weatherOfCityHourly }) =>
		weatherOfCityHourlyAdapter.upsertOne(weatherOfCityHourly, { ...state, loaded: true }),
	),
);

export function reducer(state: State | undefined, action: Action) {
	return weatherOfCityHourlyReducer(state, action);
}
