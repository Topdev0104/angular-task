/**
 * Interface for the 'WeatherOfCity' data
 */
import { WeatherOfCity } from '@bp/weather-forecast/services';

export interface WeatherOfCityEntity extends WeatherOfCity {
	id: string | number; // Primary ID, city name will be used for ID as long as we are fetching only 1 city from the coordinate
}
