import React, { Component, PropTypes } from 'react';

export class UserList extends Component {
	state = {
		active: false
	}
	
	userList = () => {
		const {
			users
		} = this.props;
		
		users.map((user) => {
			return user.name;
		});
	}

	render () {
		const {
			userList
		} = this;

		return (
			<div>
				<h4>User List Component</h4>
				<ul>
					<li>{userList()}</li>
				</ul>
			</div>
		);
	}
}

UserList.propTypes = {
	users: PropTypes.object
};