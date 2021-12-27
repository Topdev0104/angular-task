import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WEATHEROFCITYHOURLY_FEATURE_KEY, State, weatherOfCityHourlyAdapter } from './weather-of-city-hourly.reducer';

// Lookup the 'WeatherOfCityHourly' feature state managed by NgRx
export const getWeatherOfCityHourlyState = createFeatureSelector<State>(WEATHEROFCITYHOURLY_FEATURE_KEY);

const { selectAll, selectEntities } = weatherOfCityHourlyAdapter.getSelectors();

export const getWeatherOfCityHourlyLoaded = createSelector(getWeatherOfCityHourlyState, (state: State) => state.loaded);

export const getWeatherOfCityHourlyError = createSelector(getWeatherOfCityHourlyState, (state: State) => state.error);

export const getAllWeatherOfCityHourly = createSelector(getWeatherOfCityHourlyState, (state: State) =>
	selectAll(state)
);

export const getWeatherOfCityHourlyEntities = createSelector(getWeatherOfCityHourlyState, (state: State) =>
	selectEntities(state)
);

export const getSelectedId = createSelector(getWeatherOfCityHourlyState, (state: State) => state.selectedId);

export const getSelected = createSelector(getWeatherOfCityHourlyEntities, getSelectedId, (entities, selectedId) =>
	selectedId ? entities[selectedId] : undefined
);
