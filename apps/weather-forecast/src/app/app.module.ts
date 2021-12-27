import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { WeatherForecastServicesModule } from '@bp/weather-forecast/services';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import * as fromWeatherOfCity from './+state/weather-of-city.reducer';
import { WeatherOfCityEffects } from './+state/weather-of-city.effects';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		StoreModule.forRoot(
			{},
			{
				metaReducers: !environment.production ? [] : [],
				runtimeChecks: {
					strictActionImmutability: true,
					strictStateImmutability: true,
				},
			}
		),
		EffectsModule.forRoot([]),
		!environment.production ? StoreDevtoolsModule.instrument() : [],
		HttpClientModule,
		WeatherForecastServicesModule.forRoot(),
		StoreModule.forFeature(fromWeatherOfCity.WEATHEROFCITY_FEATURE_KEY, fromWeatherOfCity.reducer),
		EffectsModule.forFeature([WeatherOfCityEffects]),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
