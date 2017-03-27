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
				<div className="status-list__row">
					<div className="grid">
						<div className="grid__item one-fifth">
							<div className="user-avatar">
								<img src={"https://pbs.twimg.com/profile_images/439719495/seriousicon_400x400.jpg"} />
							</div>
							<span className="status-text">{user.name} {user.last}</span>
						</div>
						<div className="grid__item one-fifth">
							<span className="status-text">12 Jun 2017</span>
						</div>
						<div className="grid__item one-fifth">
							<span className="status-text">Taken</span>
						</div>
						<div className="grid__item one-fifth">
							<span className="status-text">Normal</span>
						</div>
						<div className="grid__item one-fifth">
							<button className="btn btn--take status-text" onClick={this.handleClick.bind(this)}>Remove</button>
						</div>
					</div>
				</div>
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
