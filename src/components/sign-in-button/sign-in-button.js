import React, { Component, PropTypes } from 'react';

export default class SignInButton extends Component {
  render() {
    const {
      handleClickSignIn,
      auth
    } = this.props;

    const renderSpinner = () => {
      return (
        <div className="spinner-content">
          <svg 
           className="spinner" 
           width="15px" 
           height="15px" 
           viewBox="0 0 66 66" 
           xmlns="http://www.w3.org/2000/svg">
           <circle 
             className="path" 
             fill="none" 
             strokeWidth="6" 
             strokeLinecap="round" 
             cx="33" 
             cy="33" 
             r="30"
            />
          </svg>
        </div>
      );
    };

    return (
      <div>
        <button className="btn btn-white" onClick={handleClickSignIn}>
          <span className="button-name">
            Signin with
            <span className="google-name"> Google</span>
            {auth.isInProgress ? renderSpinner(): ''}
          </span>
        </button>
      </div>
    );
  }
}

SignInButton.propTypes = {
  handleClickSignIn: PropTypes.func,
  auth: PropTypes.object
};

