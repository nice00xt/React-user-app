import React, { Component, PropTypes } from 'react';
import { Icon } from 'react-fa';

export class TakedButton extends Component {
	constructor(props) {
		super(props);

		this.state = {
			takeButtonState: false,
		};
  }

  handleButtonTaked () {
		this.setState({ takeButtonState: true });
	}

	handleTakeButton (idx) {
		const {
			current,
			uid,
			postId
		} = idx;

		this.props.takePost(
			uid, 
			postId, 
			current.uid, 
			current.displayName, 
			current.photoURL
		);

		this.handleButtonTaked();
  }

  renderButton () {
		const {
			current,
			postId,
			uid
		} = this.props;
		return (
			<button 
				className="btn btn--take status-text" 
				onClick={this.handleTakeButton.bind(this, {postId, uid, current})}
			>
			<Icon 
				className="push-half--right" 
				name="hand-pointer-o"
			/>
				Take!
			</button>
		);
  }

  renderUserHasTaked () {
		const {
			postId,
			postItem
		} = this.props;
		const postTaked = postItem[postId];

		return (
			<div>
				<span>lo ha tomado</span>
			</div>
		);
  }

	render () {
		return (
			this.renderButton()
		);
	}
}

TakedButton.propTypes = {
	postItem: PropTypes.object,
	current: PropTypes.object,
	handleButtonTaked: PropTypes.func,
	postId: PropTypes.string,
  handleTakeButton: PropTypes.func,
  takePost: PropTypes.func,
  uid: PropTypes.string
};
