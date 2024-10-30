import {
  initializeApp,
  getApps,
  getApp,
  App,
  cert,
  AppOptions,
} from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

import serviceKey from '@/service_key.json';

let app: App;
if (!getApps().length) {
  app = initializeApp({
    credential: cert(serviceKey as AppOptions),
  });
} else {
  app = getApp();
}

const adminDb = getFirestore(app);

export { app as adminApp, adminDb };
