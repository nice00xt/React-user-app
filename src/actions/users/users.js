import { firedux } from '../../store/firedux';
import {
  FETCH_USERS
} from '../../constants/action-types';

export function showUsers () {
  return dispatch => {
    firedux.watch('/users')
    .then(({snapshot}) => {
      dispatch({
        type: FETCH_USERS,
        payload: snapshot.val()
      });
    });
  };
}