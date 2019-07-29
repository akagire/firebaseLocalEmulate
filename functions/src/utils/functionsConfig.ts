import * as functions from 'firebase-functions';

type FirebaseConfig = {
  'databaseURL': string,
  'storageBucket': string,
  'projectId': string,
}

type FirebaseFunctionsConfig = {
  databaseURL: string,
};

export const firebaseFunctionsConfig = functions.config() as FirebaseFunctionsConfig;

const firebaseConfigRaw = process.env.FIREBASE_CONFIG as string;
export const firebaseConfig = JSON.parse(firebaseConfigRaw) as FirebaseConfig;

