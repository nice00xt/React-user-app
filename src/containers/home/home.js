import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../../actions/users/users';


export class Home extends Component {
	componentWillMount() {
    this.props.showUsers();
  }

  renderUsers () {
		const {
			users
		} = this.props;

		return _.map(users, (user, key) => {
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
				<span>Home page</span>
				<br/>
				{this.renderUsers()}
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
