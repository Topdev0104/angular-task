import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { map, Observable, switchMap } from 'rxjs';

import { Coordinate, ForecastMode, WeatherForecast, WeatherOfCity } from './weather-forecast';

@Injectable()
export class WeatherForecastApiService {

	private apiKey = '010721642521f31b0fbc8c3831d45951';
	private url = 'https://api.openweathermap.org';

	constructor(
		private http: HttpClient,
	) {
	}

	getCoordinates(city: string): Observable<Coordinate> {
		const url = `${this.url}/geo/1.0/direct`;
		const params = new HttpParams()
			.append('q', city)
			.append('limit', 1)
			.append('appid', this.apiKey);

		// This will throw 404 error when city not found...
		return this.http.get<Coordinate[]>(url, { params }).pipe(
			map(res => res[0] || new HttpErrorResponse({ status: 404, statusText: 'city not found.' })),
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

	getWeatherForecastByCity(city: string, forecastMode: ForecastMode): Observable<WeatherOfCity> {
		return this.getCoordinates(city).pipe(
			switchMap(coordinate => this.getWeatherForecast(coordinate.lat, coordinate.lon, forecastMode)
				.pipe(
					map(weather => ({ weather, coordinate })),
				),
			),
		);
	}

}
