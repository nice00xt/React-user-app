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
} from '../../actions/login/login';
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

	render () {
		return (
			<div>
				<Header
					signInWithGoogle={this.props.signInWithGoogle}
					signOut={this.props.signOut}
					login={this.props.login}
					users={this.props.users}
				/>
				<section className="content background--white">
						<div className="content__list-header">
							<div className="container">
								<h3 className="content-title--blue">Add you task</h3>
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
					createPost={this.props.createPost}
					postData={this.props.posts}
				/>
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
  login: PropTypes.object
};

function mapStateToProps(state) {
	return { 
		posts: state.posts,
		users: state.users,
		login: state.login
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
