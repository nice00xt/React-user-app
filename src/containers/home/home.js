import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/users/users';
import { Form } from '../../components/form/form';
import { UserList } from '../../components/user-list/user-list';


export class Home extends Component {
	componentWillMount() {
    this.props.showUsers();
  }

	render () {
		return (
			<div>
				<span>Home page</span>
				<br/>
				<Form
					createUser={this.props.createUser}
				/>
				<br/>
				<UserList 
					usersData={this.props.users}
				/>
			</div>
		);
	}
}

Home.propTypes = {
  users: PropTypes.object
};

function mapStateToProps(state) {
	return { users: state.users };
}

export default connect( mapStateToProps, actions )(Home);
