import Firedux from 'firedux';
import Firebase from 'firebase';

const app = Firebase.initializeApp({
    apiKey: "AIzaSyDEVoS8g0cjLYibBS2sU4YWRbGIZHmsqow",
    authDomain: "juan-test-8b2d4.firebaseapp.com",
    databaseURL: "https://juan-test-8b2d4.firebaseio.com",
    storageBucket: "juan-test-8b2d4.appspot.com",
    messagingSenderId: "613267298090"
});

const ref = app.database().ref();

export const firedux = new Firedux({
  ref
});
