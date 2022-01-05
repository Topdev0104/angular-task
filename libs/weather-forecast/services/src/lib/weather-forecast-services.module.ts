import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { WeatherForecastApiService } from './weather-forecast-api.service';

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule
	],
})
export class WeatherForecastServicesModule {
	static forRoot(): ModuleWithProviders<WeatherForecastServicesModule> {
		return {
			ngModule: WeatherForecastServicesModule,
			providers: [
				WeatherForecastApiService
			]
		};
	}
}
