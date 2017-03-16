import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {showUsers} from '../../actions/users/users';

export class UserList extends Component {
  componentDidMount() {
    this.props.showUsers();
  }

  renderUsers () {
    const {
      users
    } = this.props;
    
    return users.map((user) => {
      return (
        <li key={user.id}>{user.name}</li>
      );
    });
  }

	render () {
		return (
			<div>
				<h4>Lists</h4>
        {this.renderUsers()}
			</div>
		);
	}
}

UserList.propTypes = {
  users: PropTypes.array
};

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
