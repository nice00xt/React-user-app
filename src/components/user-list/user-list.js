import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

export class UserList extends Component {
  renderUsers () {
		const {
			usersData
		} = this.props;

		return _.map(usersData, (user, key) => {
			return (
				<li key={key}>
					{user.name}
				</li>
			);
		});
  }

	render () {
		return (
			<div>
				<h4>User List</h4>
				{this.renderUsers()}
			</div>
		);
	}
}

UserList.propTypes = {
  usersData: PropTypes.object
};
