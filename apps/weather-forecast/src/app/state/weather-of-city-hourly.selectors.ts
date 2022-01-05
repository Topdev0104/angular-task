import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, WEATHEROFCITYHOURLY_FEATURE_KEY, weatherOfCityHourlyAdapter } from './weather-of-city-hourly.reducer';

// Lookup the 'WeatherOfCityHourly' feature state managed by NgRx
export const getWeatherOfCityHourlyState = createFeatureSelector<State>(WEATHEROFCITYHOURLY_FEATURE_KEY);

const { selectAll } = weatherOfCityHourlyAdapter.getSelectors();

export const getAllWeatherOfCityHourly = createSelector(getWeatherOfCityHourlyState, (state: State) =>
	selectAll(state),
);
