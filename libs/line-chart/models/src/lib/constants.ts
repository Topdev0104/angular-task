/* eslint-disable @typescript-eslint/naming-convention */
export const CRYPTO_CURRENCY_CODES_AND_NAMES = {
	BTC: 'Bitcoin',
	DOGE: 'Dogecoin',
	ETH: 'Ethereum',
	LTC: 'Litecoin',
};

export type CryptoCurrencyCode = keyof typeof CRYPTO_CURRENCY_CODES_AND_NAMES;

export const TURN_ON_REALTIME_CRYPTO_CURRENCY_PRICES_FB_FN = 'turnOnRealtimeCryptoCurrencyPrices';

export const CRYPTO_CURRENCIES_PRICES_COLLECTION_NAME = 'crypto-currencies-prices';
