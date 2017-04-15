import React, { Component, PropTypes } from 'react';
import { Icon } from 'react-fa';
import SignInButton from '../../components/sign-in-button/sign-in-button';

export class Header extends Component {
		constructor(props) {
		super(props);

		this.state = {
			auth: null,
			tooltipIsOpen: false
		};
  }

  handleTooltip () {
   if (this.state.tooltipIsOpen) {
      this.setState({ tooltipIsOpen: false });
    } else {
      this.setState({ tooltipIsOpen: true });
    }
  }

  handleClickSignOut () {
    this.props.signOut();
    this.setState({ tooltipIsOpen: false });
  }

  renderTooltip () {
    const {
			currentUser
		} = this.props;
	
    if (this.state.tooltipIsOpen) {
      return (
				<div className="arrow_box">
					<div className="arrow-box__content">
						<span>{currentUser.email} | </span>
						<a href="#" onClick={this.handleClickSignOut.bind(this)}>
						<span><Icon className="push-half--left" name="power-off" /> Sign Out</span>
						</a>
					</div>
				</div>
      );
    }
  }

	renderUserOptions () {
		const {
			auth,
			currentUser
		} = this.props;

		const handleClickSignIn = () => {
      this.props.signInWithGoogle();
    };

		if (auth.userIsLogged === null) {
			return '';
		} else if (auth.userIsLogged) {
			return (
				<div>
					<div className="user-avatar--header">
						<span className="user-name">{currentUser.displayName}</span>
						<a href="#" onClick={this.handleTooltip.bind(this)}>
							<img src={currentUser.photoURL}/>
						</a>
					</div>
					{this.renderTooltip()}
				</div>
			);
		}

		return (
			<div>
				<div className="user-avatar--header">
					<SignInButton
						handleClickSignIn={handleClickSignIn}
						auth={auth}
					/>
				</div>
			</div>
		);
	}

	render () {
		return (
			<div>
				<header>
					<div className="banner">
						<div className="container">
							<div className="banner__logo">
								:) LOW BUDGET LOGO
							</div>
							{this.renderUserOptions()}
							<div className="clearfix" />
						</div>
					</div>
				</header>
			</div>
		);
	}
}

Header.propTypes = {
  auth: PropTypes.object,
  currentUser: PropTypes.object,
  users: PropTypes.object,
  signInWithGoogle: PropTypes.func,
  signOut: PropTypes.func
};


