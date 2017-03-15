import React, { Component } from 'react';
import { UserList } from 'components/user-list/user-list';

export class Home extends Component {
	render () {
		return (
			<div>
				<span>This is the Home page - hello world 2</span>
				<UserList />
			</div>
		);
	}
}

