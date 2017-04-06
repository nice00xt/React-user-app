import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import PostList from '../../components/post-list/post-list';
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
		event.preventDefault();
		const {
			currentUser
		} = this.props;

		const date = moment().format('MMM D YYYY');
		this.props.createPost(
			currentUser.uid,
			currentUser.displayName,
			currentUser.photoURL,
			this.state.userName,
			this.state.userLast, date);
		this.setState({ activeModal: false });
	}

  setField (e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	render () {
		const {
			props: {
				currentUser
			},
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

		const renderPostList = () => {
			return _.map(this.props.postData, (postItem, key) => {
				return (
					<PostList
						currentUser={currentUser}
						key={key}
						postItem={postItem}
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
								className="content-form"
								onChange={setField.bind(this)}
								onSubmit={handleFormSubmit.bind(this)} 
							>
								<div className="form-field">
									<label className="content-form__label">Message: </label>
									<input
										className="content-form__input"
										name={'userName'}
										type="text"
										value={userName}
										required
									/>
								</div>
								<div className="form-field">
									<label className="content-form__label">Type: </label>
									<input
										className="content-form__input"
										name={'userLast'}
										type="text"
										value={userLast}
										required
									/>
								</div>
								<button className="btn btn--light push-half--right" action="submit">Save</button>
								<button className="btn btn--default" onClick={handleCancelModal}>Cancel</button>
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
								{renderPostList()}
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
	currentUser: PropTypes.object,
	auth: PropTypes.object,
  createPost: PropTypes.func,
  postData: PropTypes.object
};
