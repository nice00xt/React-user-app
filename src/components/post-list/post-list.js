import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { Loader } from '../../components/loader/loader';
import PostItem from '../../components/post-item/post-item';
import moment from 'moment';

export class PostList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userStatus: '',
			userType: '',
			activeModal: false
		};
  }

	handleFormSubmit (event) {
		event.preventDefault();
		const {
			currentUser,
			createPost
		} = this.props;

		const date = moment().format('MMM D YYYY');
		createPost(
			currentUser.uid,
			currentUser.displayName,
			currentUser.photoURL,
			this.state.userStatus,
			this.state.userType, date);
		this.setState({ activeModal: false });
	}

	handleOpenModal () {
		this.setState({
			userStatus: '',
			userType: '',
			activeModal: true,
		});
	}

	handleCancelModal () {
		this.setState({ activeModal: false });
	}

  setField (e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	renderPostItem () {
		const {
			posts,
			currentUser
		} = this.props;		

		return _.map(posts.data, (postItem, key) => {
			return (
				<PostItem
					currentUser={currentUser}
					key={key}
					postItem={postItem}
					id={key}
				/>
			);
		});
	}

	renderModalForm () {
		const {
			state: {
				userStatus,
				userType
			},
			handleFormSubmit,
			setField
		} = this;

			if (this.state.activeModal) {
				return (
					<div className="modal">
						<div className="modal__content">
							<form
								autoComplete="off"
								className="content-form"
								onChange={setField.bind(this)}
								onSubmit={handleFormSubmit.bind(this)} 
							>
								<div className="form-field">
									<label className="content-form__label">Status: </label>
									<input
										className="content-form__input"
										name={'userStatus'}
										type="text"
										defaultValue={userStatus}
										required
									/>
								</div>
								<div className="form-field">
									<label className="content-form__label">Type: </label>
									<input
										className="content-form__input"
										name={'userType'}
										type="text"
										defaultValue={userType}
										required
									/>
								</div>
								<button className="btn btn--light push-half--right" action="submit">Save</button>
								<button className="btn btn--default" onClick={this.handleCancelModal.bind(this)}>Cancel</button>
							</form>
						</div>
					</div>
				);
			}
		}


	render () {
		const {
			posts
		} = this.props;

		return (
			<div>
				<section className="content">
					<div className="content__list">
						<div className="container">
							<div className="status-list">
								<div className="status-list__titles">
									<button className="btn btn--default float--right" onClick={this.handleOpenModal.bind(this)}>
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
								{ posts.isFetching 
									? <Loader /> 
									: this.renderPostItem()
								}
							</div>
						</div>
					</div>
				</section>
				{this.renderModalForm()}
			</div>
		);
	}
}

PostList.propTypes = {
	currentUser: PropTypes.object,
	auth: PropTypes.object,
  createPost: PropTypes.func,
  posts: PropTypes.object
};
