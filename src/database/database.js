import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

import serviceAccount from '../../credentials.json' assert { type: "json" };

initializeApp({
    credential: cert(serviceAccount),
});

const db = getFirestore();

export default db;