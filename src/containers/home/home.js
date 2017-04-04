import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/posts/posts';
import { Form } from '../../components/form/form';

export class Home extends Component {
	componentWillMount() {
    this.props.fetchPost();
  }

	render () {
		return (
			<div>
				<header>
					<div className="banner">
						<div className="container">
							<div className="banner__logo">
								LOGO
							</div>
						</div>
					</div>
				</header>
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
  posts: PropTypes.object
};

function mapStateToProps(state) {
	return { posts: state.posts };
}

export default connect( mapStateToProps, actions )(Home);
