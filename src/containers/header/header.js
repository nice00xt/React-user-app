import React, { Component, PropTypes } from 'react';
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
    if (this.state.tooltipIsOpen) {
      return (
				<div className="arrow_box">
					<div className="arrow-box__content">
						<span>juan00xt@gmail.com | </span>
						<a href="#" onClick={this.handleClickSignOut.bind(this)}>
							Sign Out
						</a>
					</div>
				</div>
      );
    }
  }

	renderUserOptions () {
		const {
			auth
		} = this.props;

		const handleClickSignIn = () => {
      this.props.signInWithGoogle();
    };

		if (auth.isUserSignedIn) {
			return (
				<div>
					<div className="user-avatar--header">
						<span className="user-name">Nombre usuario</span>
						<a href="#" onClick={this.handleTooltip.bind(this)}>
							<img src={"https://pbs.twimg.com/profile_images/439719495/seriousicon_400x400.jpg"} />
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
						login={auth}
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
								LOGO
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
  signInWithGoogle: PropTypes.func,
  signOut: PropTypes.func,
  auth: PropTypes.object,
  users: PropTypes.object,
};


