/**
 * Interface for the 'WeatherOfCity' data
 */
import { WeatherOfCity } from '@bp/weather-forecast/services';

export interface WeatherOfCityEntity extends WeatherOfCity {
	id: string | number; // Primary ID
}
