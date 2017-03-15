import { connect } from 'react-redux';
import React, { Component} from 'react';
import { UserList } from '../../components/user-list/user-list';
import { showUsers } from '../../actions/users/users';

export class Home extends Component {
	componentDidMount() {
		this.props.showUsers();
	}
	render () {
		return (
			<div>
				<span>This is the Home page - hello world 2</span>
				<UserList
					users={this.props.users}
				/>	
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
		showUsers: function() {
			dispatch(showUsers());
		}
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
