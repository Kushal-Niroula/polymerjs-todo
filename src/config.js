import firebase from "firebase/app";

import 'firebase/firestore';
import Env from '../env.config.js'

const firebaseConfig = {
    apiKey: Env.API_KEY,
    authDomain: Env.AUTH_DOMAIN,
    projectId: Env.PROJECT_ID,
    storageBucket: Env.STORAGE_BUCKET,
    messagingSenderId: Env.MESSAGING_SENDER_ID,
    appId: Env.APP_ID,
    measurementId: Env.MEASUREMENT_ID
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

db.settings({timestampInSnapshots:true});

export default db;