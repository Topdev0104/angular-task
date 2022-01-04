export enum ForecastMode {
	Hourly = 'HOURLY',
	Daily = 'DAILY'
}

export interface Coordinate {
	country: string;
	lat: number;
	lon: number;
	name: string;
	state: string;
	local_names: { [key: string]: string };
}

export interface WeatherClip {
	description: string;
	icon: string;
	id: number;
	main: string;
}

export interface Day {
	morn: number;
	day: number;
	eve: number;
	night: number;
}

export interface TempOfDay extends Day {
	max: number;
	min: number;
}

export interface Weather {
	clouds: number;
	dew_point: number;
	dt: number;
	humidity: number;
	pop: number;
	pressure: number;
	uvi: number;
	weather: WeatherClip[];
	wind_deg: number;
	wind_gust: number;
	wind_speed: number;
}

export interface Amount {
	'1h': number;
}

export interface WeatherHourly extends Weather {
	feels_like: number;
	temp: number;
	visibility: number;

	rain?: Amount;
	snow?: Amount;
}

export interface WeatherDaily extends Weather {
	feels_like: Day;

	moon_phase: number;
	moonrise: number;
	moonset: number;

	sunrise: number;
	sunset: number;

	temp: TempOfDay;

	rain?: number;
	snow?: number;
}

export interface WeatherForecast {
	lat: number;
	lon: number;
	timezone: string;
	timezone_offset: number;
	hourly?: WeatherHourly[];
	daily?: WeatherDaily[];
}

export interface WeatherOfCity {
	coordinate: Coordinate;
	weather: WeatherForecast;
}
