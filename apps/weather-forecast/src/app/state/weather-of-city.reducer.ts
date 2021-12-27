import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as WeatherOfCityActions from './weather-of-city.actions';
import { WeatherOfCityEntity } from './weather-of-city.models';

export const WEATHEROFCITY_FEATURE_KEY = 'weatherOfCity';

export interface State extends EntityState<WeatherOfCityEntity> {
	selectedId?: string | number; // which WeatherOfCity record has been selected
	loaded: boolean; // has the WeatherOfCity list been loaded
	error?: string | null; // last known error (if any)
}

export interface WeatherOfCityPartialState {
	readonly [WEATHEROFCITY_FEATURE_KEY]: State;
}

export const weatherOfCityAdapter: EntityAdapter<WeatherOfCityEntity> = createEntityAdapter<WeatherOfCityEntity>();

export const initialState: State = weatherOfCityAdapter.getInitialState({
	// set initial required properties
	loaded: false,
});

const weatherOfCityReducer = createReducer(
	initialState,
	on(WeatherOfCityActions.init, state => ({ ...state, loaded: false, error: null })),
	on(WeatherOfCityActions.loadWeatherOfCitySuccess, (state, { weatherOfCity }) => {
		console.log(state);
		return weatherOfCityAdapter.setAll([weatherOfCity], { ...state, loaded: true })
	}),
	on(WeatherOfCityActions.loadWeatherOfCityFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
	return weatherOfCityReducer(state, action);
}
