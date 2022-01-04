import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { WeatherForecastServicesModule } from '@bp/weather-forecast/services';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import * as fromWeatherOfCity from './state/weather-of-city.reducer';
import { WeatherOfCityEffects } from './state/weather-of-city.effects';
import * as fromWeatherOfCityDaily from './state/weather-of-city-daily.reducer';
import * as fromWeatherOfCityHourly from './state/weather-of-city-hourly.reducer';

import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		AppRoutingModule,
		StoreModule.forRoot(
			{},
			{
				metaReducers: !environment.production ? [] : [],
				runtimeChecks: {
					strictActionImmutability: true,
					strictStateImmutability: true,
				},
			},
		),
		EffectsModule.forRoot([]),
		!environment.production ? StoreDevtoolsModule.instrument() : [],
		HttpClientModule,
		WeatherForecastServicesModule.forRoot(),
		StoreModule.forFeature(fromWeatherOfCity.WEATHEROFCITY_FEATURE_KEY, fromWeatherOfCity.reducer),
		EffectsModule.forFeature([WeatherOfCityEffects]),
		StoreModule.forFeature(fromWeatherOfCityDaily.WEATHEROFCITYDAILY_FEATURE_KEY, fromWeatherOfCityDaily.reducer),
		StoreModule.forFeature(
			fromWeatherOfCityHourly.WEATHEROFCITYHOURLY_FEATURE_KEY,
			fromWeatherOfCityHourly.reducer,
		),
		LayoutModule,
		SharedModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {
}
