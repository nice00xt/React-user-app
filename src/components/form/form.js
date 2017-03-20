import React, { Component, PropTypes } from 'react';
import * as actions from '../../actions/users/users';
import { connect } from 'react-redux';

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

		console.log(this.state.userName);
		this.props.createUser(this.state.userName, this.state.userLast);
	}

	handleInputChange(event) {
    this.setState({
			[event.target.name]: event.target.value
    });
  }

	render () {
		const {
			state: {
				userName,
				userLast
			},
			handleFormSubmit,
			handleInputChange
		} = this;
		
		return (
			<div>
				Create user list
				<form onSubmit={handleFormSubmit.bind(this)}>
					<label>name: </label>
					<input
						name={'userName'}
						type="text"
						value={userName}
						onChange={handleInputChange.bind(this)}
					/>
					<br/>
					<label>last: </label>
					<input
						name={'userLast'}
						type="text"
						value={userLast}
						onChange={handleInputChange.bind(this)}
					/>
					<button action="submit">Save</button>
				</form>
			</div>
		);
	}
}

Form.propTypes = {
  createUser: PropTypes.func
};

export default connect(null, actions)(Form);