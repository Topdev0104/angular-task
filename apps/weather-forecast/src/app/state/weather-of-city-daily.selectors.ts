import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WEATHEROFCITYDAILY_FEATURE_KEY, State, weatherOfCityDailyAdapter } from './weather-of-city-daily.reducer';

// Lookup the 'WeatherOfCityDaily' feature state managed by NgRx
export const getWeatherOfCityDailyState = createFeatureSelector<State>(WEATHEROFCITYDAILY_FEATURE_KEY);

const { selectAll, selectEntities } = weatherOfCityDailyAdapter.getSelectors();

export const getWeatherOfCityDailyLoaded = createSelector(getWeatherOfCityDailyState, (state: State) => state.loaded);

export const getWeatherOfCityDailyError = createSelector(getWeatherOfCityDailyState, (state: State) => state.error);

export const getAllWeatherOfCityDaily = createSelector(getWeatherOfCityDailyState, (state: State) => selectAll(state));

export const getWeatherOfCityDailyEntities = createSelector(getWeatherOfCityDailyState, (state: State) =>
	selectEntities(state)
);

export const getSelectedId = createSelector(getWeatherOfCityDailyState, (state: State) => state.selectedId);

export const getSelected = createSelector(getWeatherOfCityDailyEntities, getSelectedId, (entities, selectedId) =>
	selectedId ? entities[selectedId] : undefined
);
