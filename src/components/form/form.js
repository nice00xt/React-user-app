import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import UserList from '../../components/user-list/user-list';
import moment from 'moment';

export class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userName: '',
			userLast: '',
			activeModal: false
		};
  }

	handleFormSubmit (event) {
		const date = moment().format('MMM D YYYY');
		event.preventDefault();
		this.props.createUser(this.state.userName, this.state.userLast, date);
		this.setState({ activeModal: false });
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

		const handleOpenModal = () => {
			this.setState({ activeModal: true });
		};

		const handleCancelModal = () => {
			this.setState({ activeModal: false });
		};

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

		const renderModalForm = () => {
			if (this.state.activeModal) {
				return (
					<div className="modal">
						<div className="modal__content">
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
								<button onClick={handleCancelModal}>Cancel</button>
							</form>
						</div>
					</div>
				);
			}
		};

		return (
			<div>
				<section className="content">
					<div className="content__list">
						<div className="container">
							<div className="status-list">
								<div className="status-list__titles">
									<button className="btn btn--default float--right" onClick={handleOpenModal}>
										Add +
									</button>
									<div className="clearfix" />
									<div className="grid">
										<div className="grid__item one-fifth">
											<span>USER</span>
										</div>
										<div className="grid__item one-fifth">
											<span>SUBMITTED</span>
										</div> 
										<div className="grid__item one-fifth">
											<span>STATUS</span>
										</div>
										<div className="grid__item one-fifth">
											<span>TYPE</span>
										</div>
									</div>
								</div>
								{renderUserList()}
							</div>
						</div>
					</div>
				</section>
				{renderModalForm()}
			</div>
		);
	}
}

Form.propTypes = {
  createUser: PropTypes.func,
  usersData: PropTypes.object
};
