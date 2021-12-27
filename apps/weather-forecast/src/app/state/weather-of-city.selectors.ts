import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WEATHEROFCITY_FEATURE_KEY, State, weatherOfCityAdapter } from './weather-of-city.reducer';

// Lookup the 'WeatherOfCity' feature state managed by NgRx
export const getWeatherOfCityState = createFeatureSelector<State>(WEATHEROFCITY_FEATURE_KEY);

const { selectAll, selectEntities } = weatherOfCityAdapter.getSelectors();

export const getWeatherOfCityLoaded = createSelector(getWeatherOfCityState, (state: State) => state.loaded);

export const getWeatherOfCityError = createSelector(getWeatherOfCityState, (state: State) => state.error);

export const getAllWeatherOfCity = createSelector(getWeatherOfCityState, (state: State) => selectAll(state));

export const getWeatherOfCityEntities = createSelector(getWeatherOfCityState, (state: State) => selectEntities(state));

export const getSelectedId = createSelector(getWeatherOfCityState, (state: State) => state.selectedId);

export const getSelected = createSelector(getWeatherOfCityEntities, getSelectedId, (entities, selectedId) =>
	selectedId ? entities[selectedId] : undefined
);
