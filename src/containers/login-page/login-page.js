import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import * as actions from '../../actions/login/login';


export class LoginPage extends Component {
		constructor(props) {
		super(props);

		this.state = {
			login: null,
		};
  }

	renderContent () {
		if (this.state.login) {
			return (
				<div>
					<span>test Wellcome!</span>
				</div>
			);
		} else if (this.state.login === false) {
			return (
				<div>
					<span>test Bye</span>
				</div>
			);
		}
	}

	render () {
    const handleClickSignIn = () => {
      this.props.signInWithGoogle();
    };

		return (
			<div className="content">
				<div className="container">
					<div className="login-box">
						<span>Login</span>
						<br/>
						<button onClick={handleClickSignIn}>Login with google</button>
						<button onClick={this.handleClickSignOut}>Signout</button>
						{this.renderContent()}
					</div>
				</div>
			</div>
		);
	}
}

LoginPage.propTypes = {
  signInWithGoogle: PropTypes.func,
};


export default connect(null, actions)(LoginPage);
