import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/users/users';

export class UserList extends Component {
	handleClick() {
    this.props.removeUser(this.props.id);
  }

	render () {
		const {
			user
		} = this.props;

		return (
			<div>
				<span>{user.name} </span>
				<span>{user.last} </span>
				<button onClick={this.handleClick.bind(this)}>Remove</button>
			</div>
		);
	}
}

UserList.propTypes = {
  user: PropTypes.object,
  removeUser: PropTypes.func,
  id: PropTypes.string
};

export default connect(null, actions)(UserList);
