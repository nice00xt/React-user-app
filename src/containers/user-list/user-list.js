import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { showUsers } from '../../actions/users/users';
import React, { Component } from 'react';

export class UserList extends Component {
	render () {
		return (
			<div>
				<h4>User List Component</h4>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		users: state.user.list
	};
}

function mapDispatchToProps(dispatch) {
  return {
    showUsers: bindActionCreators(showUsers, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
