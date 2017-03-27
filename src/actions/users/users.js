import Firebase from 'firebase';
import {
	CREATE_USER,
	SHOW_USERS,
	REMOVE_USER
} from '../../constants/action-types';

const app = {
    apiKey: "AIzaSyDEVoS8g0cjLYibBS2sU4YWRbGIZHmsqow",
    authDomain: "juan-test-8b2d4.firebaseapp.com",
    databaseURL: "https://juan-test-8b2d4.firebaseio.com",
    storageBucket: "juan-test-8b2d4.appspot.com",
    messagingSenderId: "613267298090"
  };
Firebase.initializeApp(app);
const data = Firebase.database();

export function showUsers () {
	return dispatch => {
		data.ref('/users').once('value', snap => {
			dispatch({
				type: SHOW_USERS,
				payload: snap.val()
			});
		});
	};
}

export function createUser (user, last, date) {
	return dispatch => {
    const guestsRef = data.ref('/users');
    guestsRef.push({
      name: user,
      last: last,
      date: date
    })
    .then(() => {
      dispatch({
				type: CREATE_USER
      });
    });
  };
} 

export function removeUser (key) {
	return dispatch => {
		data.ref('/users').child(key).remove();
		dispatch({
			type: REMOVE_USER
		});
	};
} 