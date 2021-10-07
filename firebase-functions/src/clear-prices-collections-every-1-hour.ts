/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import * as functions from 'firebase-functions';

import { CRYPTO_CURRENCIES_PRICES_COLLECTION_NAME } from '../../libs/line-chart/models/src';

// eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports
const firebaseTools = require('firebase-tools');

export const clearPricesCollectionsEvery1Hour = functions
	.runWith({
		timeoutSeconds: 540,
		memory: '2GB',
	})
	.pubsub.schedule('every 60 minutes')
	.onRun(async () => {
		await firebaseTools.firestore.delete(CRYPTO_CURRENCIES_PRICES_COLLECTION_NAME, {
			project: process.env.GCLOUD_PROJECT,
			recursive: true,
			yes: true,
			token: functions.config().fb.token,
		});
	});
