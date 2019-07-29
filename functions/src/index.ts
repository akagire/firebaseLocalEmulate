import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

import { Logging } from '@google-cloud/logging';

import { firebaseConfig } from './utils/functionsConfig';

const serviceAccount = require('../../serviceAccountKeys/firebaseAdminsdk.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: firebaseConfig.databaseURL,
});

const func = functions.region('asia-northeast1');

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = func.https.onRequest((request, response) => {
 response.send('Hello from Firebase!');
});

export const StackdriverTest = func.https.onRequest(async (req, res) => {
  const logging = new Logging({
    projectId: process.env.GCROUD_PROJECT,
  });

  const log = logging.log('custom-log');
  const text = 'log message';
  const metadata = {
    resource: {
      type: 'global',
    }
  };

  const entry = log.entry(metadata, text);

  await log.write(entry);
  res.send('text');
});

export const ProcessEnv = func.https.onRequest((req, res) => {
  res.send(process.env);

});
