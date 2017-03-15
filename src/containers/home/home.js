import { connect } from 'react-redux';
import React, { Component} from 'react';
import { UserList } from '../../components/user-list/user-list';
import { showUsers } from '../../actions/users/users';

export class Home extends Component {
	componentWillMount () {
		console.log(this.props);
	}

	render () {
		return (
			<div>
				<span>This is the Home page - hello world 2</span>
				<UserList />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		users: state.user.list
	};
}

export default connect(mapStateToProps, { 
	showUsers
})(Home);