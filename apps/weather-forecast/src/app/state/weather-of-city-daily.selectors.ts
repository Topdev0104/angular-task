import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, WEATHEROFCITYDAILY_FEATURE_KEY, weatherOfCityDailyAdapter } from './weather-of-city-daily.reducer';

// Lookup the 'WeatherOfCityDaily' feature state managed by NgRx
export const getWeatherOfCityDailyState = createFeatureSelector<State>(WEATHEROFCITYDAILY_FEATURE_KEY);

const { selectAll } = weatherOfCityDailyAdapter.getSelectors();

export const getAllWeatherOfCityDaily = createSelector(getWeatherOfCityDailyState, (state: State) => selectAll(state));
