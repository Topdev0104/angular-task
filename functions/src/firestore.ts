import * as admin from 'firebase-admin';

export const firestore = admin.initializeApp().firestore();
