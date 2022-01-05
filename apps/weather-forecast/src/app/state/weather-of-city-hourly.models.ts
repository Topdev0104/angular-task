import { Coordinate, WeatherHourly } from '@bp/weather-forecast/services';

/**
 * Interface for the 'WeatherOfCityHourly' data
 */
export interface WeatherOfCityHourlyEntity {
	id: string; // Primary ID, ID will be city name at the moment
	weather?: WeatherHourly[];
	coordinate: Coordinate;
}
