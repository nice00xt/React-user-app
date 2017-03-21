import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import UserList from '../../components/user-list/user-list';

export class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userName: '',
			userLast: ''
		};
  }

	handleFormSubmit (event) {
		event.preventDefault();
		this.props.createUser(this.state.userName, this.state.userLast);
	}

  setField (e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	render () {
		const {
			state: {
				userName,
				userLast
			},
			handleFormSubmit,
			setField
		} = this;

		const renderUserList = () => {
			return _.map(this.props.usersData, (user, key) => {
				return (
					<UserList
						key={key}
						user={user}
						id={key}
					/>
				);
			});
		};

		return (
			<div>
				Create user list
				<form
					onChange={setField.bind(this)}
					onSubmit={handleFormSubmit.bind(this)} 
				>
					<label>name: </label>
					<input
						name={'userName'}
						type="text"
						value={userName}
					/>
					<br/>
					<label>last: </label>
					<input
						name={'userLast'}
						type="text"
						value={userLast}
					/>
					<button action="submit">Save</button>
				</form>
				<br/>
				{renderUserList()}
			</div>
		);
	}
}

Form.propTypes = {
  createUser: PropTypes.func,
  usersData: PropTypes.object
};
