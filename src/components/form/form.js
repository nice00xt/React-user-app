import React, { Component, PropTypes } from 'react';
import * as actions from '../../actions/users/users';
import { connect } from 'react-redux';
import { UserList } from '../../components/user-list/user-list';

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
		this.setState({[e.target.name]: e.target.value});
	}

	render () {
		const {
			props: {
				usersData
			},
			state: {
				userName,
				userLast
			},
			handleFormSubmit,
			setField
		} = this;

		return (
			<div>
				Create user list
				<form 
					onSubmit={handleFormSubmit.bind(this)} 
					onChange={setField.bind(this)}
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
				<UserList
					usersData={usersData}
				/>
			</div>
		);
	}
}

Form.propTypes = {
  createUser: PropTypes.func,
  usersData: PropTypes.object
};

export default connect(null, actions)(Form);