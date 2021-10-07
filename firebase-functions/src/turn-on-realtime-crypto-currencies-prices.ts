import * as functions from 'firebase-functions';
import { interval, Subscription, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import type { CryptoCurrencyCode } from '../../libs/line-chart/models/src';
import {
	CRYPTO_CURRENCIES_PRICES_COLLECTION_NAME,
	TURN_ON_REALTIME_CRYPTO_CURRENCY_PRICES_FB_FN,
	CRYPTO_CURRENCY_CODES_AND_NAMES,
} from '../../libs/line-chart/models/src';

import { firestore } from './firestore';

let timerSubscription = Subscription.EMPTY;
let activeCryptoCurrencyCode: CryptoCurrencyCode | null = null;

const cryptoCurrenciesPricesCollection = firestore.collection(CRYPTO_CURRENCIES_PRICES_COLLECTION_NAME);

type CryptoCurrencyState = {
	cryptoCurrencyCode: CryptoCurrencyCode;
	priceVector: number;
	price: number;
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
exports[TURN_ON_REALTIME_CRYPTO_CURRENCY_PRICES_FB_FN] = functions.https.onCall(
	async ({ cryptoCurrencyCode }: { cryptoCurrencyCode: CryptoCurrencyCode }) => {
		if (
			!CRYPTO_CURRENCY_CODES_AND_NAMES[cryptoCurrencyCode] ||
			(cryptoCurrencyCode === activeCryptoCurrencyCode && !timerSubscription.closed)
		)
			return;

		activeCryptoCurrencyCode = cryptoCurrencyCode;
		const cryptoCurrencyState = await getInitialCryptoCurrencyState(cryptoCurrencyCode);

		timerSubscription.unsubscribe();

		timerSubscription = interval(2000)
			.pipe(takeUntil(timer(1000 * 60 * 15)))
			.subscribe(() => {
				generatePriceForGivenCryptoState(cryptoCurrencyState);

				setGeneratedCryptoPrice(cryptoCurrencyState);
			});
	}
);

function setGeneratedCryptoPrice({ cryptoCurrencyCode, price }: CryptoCurrencyState): void {
	void cryptoCurrenciesPricesCollection.doc(`${cryptoCurrencyCode}/prices/${Date.now()}`).set({
		timestamp: Date.now(),
		price,
	});
}

async function getInitialCryptoCurrencyState(cryptoCurrencyCode: CryptoCurrencyCode): Promise<CryptoCurrencyState> {
	const pricesDocuments = await cryptoCurrenciesPricesCollection
		.doc(cryptoCurrencyCode)
		.collection('prices')
		.orderBy('timestamp')
		.limitToLast(1)
		.get();

	const [lastPriceDocument] = pricesDocuments.docs;

	return {
		cryptoCurrencyCode,
		priceVector: 1,
		// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
		price: <number | undefined>lastPriceDocument?.data().price ?? 100,
	};
}

function generatePriceForGivenCryptoState(state: CryptoCurrencyState): void {
	state.priceVector = new Date().getSeconds() % 15 === 0 ? state.priceVector * -1 : state.priceVector;

	state.price += Math.round(Math.random() * 15) * new Date().getSeconds() * state.priceVector;

	if (state.price < 200) state.priceVector = 1;
}
