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
	signOut,
	userSessionState
} from '../../actions/auth/auth';
import { Form } from '../../components/form/form';
import { Header } from '../../components/header/header';

export class Home extends Component {
	componentWillMount() {
		const {
			showUsers,
			fetchPost,
			userSessionState
		} = this.props;

		showUsers();
		fetchPost();
    userSessionState();
  }

  renderHeader () {
    return (
      <Header
				auth={this.props.auth}
				currentUser={this.props.auth.user}
				users={this.props.users}
				signInWithGoogle={this.props.signInWithGoogle}
				signOut={this.props.signOut}
			/>
    );
  }

  renderForm () {
    const {
      auth
		} = this.props;

		if (auth.userIsLogged) {
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
											<a href="#">MY TASK</a>
										</li>
									</ul>
								</div>
							</div>
					</section>
          <Form
						auth={auth}
						currentUser={auth.user}
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
				{this.renderHeader()}
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
  auth: PropTypes.object,
  userSessionState: PropTypes.func
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
		signOut,
		userSessionState
	}
)(Home);
