import firebase from 'firebase/app';

import { Injectable } from '@angular/core';

// Firebase App (the core Firebase SDK) is always required and must be listed first

import 'firebase/firestore';
import 'firebase/functions';

import {
	CryptoCurrencyCode, CRYPTO_CURRENCIES_PRICES_COLLECTION_NAME, TURN_ON_REALTIME_CRYPTO_CURRENCY_PRICES_FB_FN
} from '@bp/line-chart/models';

@Injectable({
	providedIn: 'root',
})
export class FirebaseService {
	protected get _firestore(): firebase.firestore.Firestore {
		return firebase.firestore();
	}

	protected get _functions(): firebase.functions.Functions {
		return firebase.functions();
	}

	constructor() {
		firebase.initializeApp({
			apiKey: 'AIzaSyBlTgmKN7hPNG_A1EqaPyVHF668SkfFl4s',
			authDomain: 'angular-dev-test-task.firebaseapp.com',
			projectId: 'angular-dev-test-task',
			storageBucket: 'angular-dev-test-task.appspot.com',
			messagingSenderId: '978693463659',
			appId: '1:978693463659:web:7aa38253892da9c0b15b2e',
		});

		// Example
		this._firestore.collection(`${CRYPTO_CURRENCIES_PRICES_COLLECTION_NAME}/BTC/prices`).onSnapshot({
			next(snapshot) {
				console.warn(
					snapshot.docChanges().map(change => ({
						timestamp: change.doc.id,
						...change.doc.data(),
					}))
				);
			},
		});

		// Example
		setTimeout(() => void this.turnOnRealtimeCryptoCurrencyPrices('BTC'), 2000);
	}

	turnOnRealtimeCryptoCurrencyPrices(cryptoCurrencyCode: CryptoCurrencyCode): void {
		void this._functions.httpsCallable(<string>TURN_ON_REALTIME_CRYPTO_CURRENCY_PRICES_FB_FN)({
			cryptoCurrencyCode,
		});
	}
}
