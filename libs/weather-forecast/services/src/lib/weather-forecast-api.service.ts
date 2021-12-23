import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { Coordinate, ForecastMode, WeatherForecast } from './weather-forecast';

@Injectable()
export class WeatherForecastApiService {

	private apiKey = '010721642521f31b0fbc8c3831d45951';
	private url = 'https://api.openweathermap.org';

	constructor(
		private http: HttpClient
	) {
	}

	getCoordinates(city: string): Observable<Coordinate> {
		const url = `${this.url}/geo/1.0/direct`;
		const params = new HttpParams()
			.append('q', city)
			.append('limit', 1)
			.append('appid', this.apiKey);

		return this.http.get<Coordinate[]>(url, { params }).pipe(
			map(res => res[0])
		);
	}

	getWeatherForecast(lat: number, lon: number, forecastMode: ForecastMode): Observable<WeatherForecast> {
		const url = `${this.url}/data/2.5/onecall`;
		const params = new HttpParams()
			.append('lat', lat)
			.append('lon', lon)
			.append('exclude', `current,minutely,${forecastMode === ForecastMode.Daily ? 'hourly' : 'daily'},alerts`)
			.append('appid', this.apiKey);

		return this.http.get<WeatherForecast>(url, { params });
	}

}
