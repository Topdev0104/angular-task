import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as WeatherOfCityActions from './weather-of-city.actions';
import { WeatherOfCityEntity } from './weather-of-city.models';

export const WEATHEROFCITY_FEATURE_KEY = 'weatherOfCity';

export interface State extends EntityState<WeatherOfCityEntity> {
	selectedId?: string | number; // which WeatherOfCity record has been selected
	loading: boolean; // has the WeatherOfCity list been loaded
	error?: string | null; // last known error (if any)
}

export interface WeatherOfCityPartialState {
	readonly [WEATHEROFCITY_FEATURE_KEY]: State;
}

export const weatherOfCityAdapter: EntityAdapter<WeatherOfCityEntity> = createEntityAdapter<WeatherOfCityEntity>();

export const initialState: State = weatherOfCityAdapter.getInitialState({
	// set initial required properties
	loading: false,
});

const weatherOfCityReducer = createReducer(
	initialState,
	on(WeatherOfCityActions.loadWeatherOfCity, state => ({ ...state, loading: true })),
	on(WeatherOfCityActions.loadWeatherOfCitySuccess, state => ({ ...state, loading: false })),
	on(WeatherOfCityActions.loadWeatherOfCityFailure, (state, { error }) => ({ ...state, loading: false, error })),
);

export function reducer(state: State | undefined, action: Action) {
	return weatherOfCityReducer(state, action);
}
