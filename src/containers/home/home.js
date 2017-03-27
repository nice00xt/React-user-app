import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/users/users';
import { Form } from '../../components/form/form';

export class Home extends Component {
	componentWillMount() {
    this.props.showUsers();
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
										<a href="#">USER LIST</a>
									</li>
									<li className="content__tabs-title">
										<a href="#">DONE</a>
									</li>
								</ul>
							</div>
						</div>
				</section>
				<Form
					createUser={this.props.createUser}
					usersData={this.props.users}
				/>
			</div>
		);
	}
}

Home.propTypes = {
	createUser: PropTypes.func,
	showUsers: PropTypes.func,
  users: PropTypes.object
};

function mapStateToProps(state) {
	return { users: state.users };
}

export default connect( mapStateToProps, actions )(Home);
