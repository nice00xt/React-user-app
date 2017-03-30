import { firedux } from '../../store/firedux';
import React, { Component } from 'react';

export class loginPage extends Component {

	googleSignin () {
		const provider = new firedux.auth.GoogleAuthProvider();
		firedux.auth()

		.signInWithPopup(provider).then(function(result) {
        const token = result.credential.accessToken;
        const user = result.user;
      
        console.log(token);
        console.log(user);
     }).catch(function(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
      
        console.log(errorCode);
        console.log(errorMessage);
     });
	}

	googleSignout () {
		firedux.auth().signOut()
    
    .then(function() {
      console.log('Signout Succesfull');
    }, function(error) {
      console.log('Signout Failed');  
    });
	}

	render () {
		return (
			<div className="content">
				<div className="container">
					<div className="login-box">
						<span>Login</span>
						<br/>
						<button onClick={this.googleSignin}>Login with google</button>
						<button onClick={this.googleSignout}>Signout</button>
					</div>
				</div>
			</div>
		);
	}
}
