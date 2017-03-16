import { SHOW_USERS } from '../../constants/action-types';

export function showUsers() {
		const users = [
		{
			id: 1,
			name: 'user 1'
		},
		{
			id: 2,
			name: 'user 2'
		}
	];

	return {
		type: SHOW_USERS,
		payload: users
	};
}
