import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Coordinate } from './weather-forecast';

@Injectable()
export class WeatherForecastApiService {

	private apiKey = '010721642521f31b0fbc8c3831d45951';
	private url = 'https://api.openweathermap.org';

	constructor(
		private http: HttpClient
	) {
	}

	getCoordinates(city: string): Observable<Coordinate[]> {
		const url = `${this.url}/geo/1.0/direct`;
		const params = new HttpParams()
			.append('q', city)
			.append('limit', 1)
			.append('appid', this.apiKey);

		return this.http.get<Coordinate[]>(url, { params });
	}

}
