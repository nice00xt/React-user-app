import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
	fetchPost,
	createPost,
	removePost
} from '../../actions/posts/posts';
import {
	showUsers
} from '../../actions/users/users';
import {
	signInWithGoogle,
	signOut
} from '../../actions/auth/auth';
import { Form } from '../../components/form/form';
import { Header } from '../header/header';

export class Home extends Component {
	componentWillMount() {
		const {
			fetchPost,
			showUsers
		} = this.props;

    fetchPost();
    showUsers();
  }

  currentUser () {
		const {
			auth,
			users
		} = this.props;

		return users[auth.uid];
  }

  renderForm () {
    const {
      auth
		} = this.props;

		if (auth.isUserSignedIn) {
			return (
        <div>
            <section className="content background--white">
							<div className="content__list-header">
								<div className="container">
									<h3 className="content-title--blue">Add your task</h3>
								</div>
							</div>
							<div className="content__tabs">
								<div className="container">
									<ul className="content__tabs-list">
										<li className="content__tabs-title--active">
											<a href="#">TASK LIST</a>
										</li>
										<li className="content__tabs-title">
											<a href="#">TAKEN</a>
										</li>
									</ul>
								</div>
							</div>
					</section>
          <Form
						auth={this.props.auth}
						currentUser={this.currentUser()}
						createPost={this.props.createPost}
						postData={this.props.posts}
					/>
        </div>
      );
		}
  }

	render () {
		return (
			<div>
				<Header
					auth={this.props.auth}
					currentUser={this.currentUser()}
					users={this.props.users}
					signInWithGoogle={this.props.signInWithGoogle}
					signOut={this.props.signOut}
				/>
				{this.renderForm()}
			</div>
		);
	}
}

Home.propTypes = {
	createPost: PropTypes.func,
	fetchPost: PropTypes.func,
	showUsers: PropTypes.func,
  posts: PropTypes.object,
  users: PropTypes.object,
  signInWithGoogle: PropTypes.func,
  signOut: PropTypes.func,
  auth: PropTypes.object
};

function mapStateToProps(state) {
	return { 
		posts: state.posts,
		users: state.users,
		auth: state.auth
	};
}

export default connect( 
	mapStateToProps,
	{
		fetchPost,
		createPost,
		removePost,
		showUsers,
		signInWithGoogle,
		signOut
	}
)(Home);
