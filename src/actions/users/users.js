import Firebase from 'firebase';
import { SHOW_USERS } from '../../constants/action-types';

const config = {
    apiKey: "AIzaSyDEVoS8g0cjLYibBS2sU4YWRbGIZHmsqow",
    authDomain: "juan-test-8b2d4.firebaseapp.com",
    databaseURL: "https://juan-test-8b2d4.firebaseio.com",
    storageBucket: "juan-test-8b2d4.appspot.com",
    messagingSenderId: "613267298090"
  };
Firebase.initializeApp(config);
const data = Firebase.database();

export function showUsers() {
	return dispatch => {
		data.ref('/').once('value', snap => {
			dispatch({
				type: SHOW_USERS,
				payload: snap.val()
			});
		});
	};
}
