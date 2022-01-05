/**
 * Interface for the 'WeatherOfCityDaily' data
 */
import { Coordinate, WeatherDaily } from '@bp/weather-forecast/services';

export interface WeatherOfCityDailyEntity {
	id: string; // Primary ID, ID will be city name at the moment
	weather?: WeatherDaily[];
	coordinate: Coordinate;
}
