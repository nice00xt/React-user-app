import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/posts/posts';
import { Icon } from 'react-fa';
import { TakedButton } from '../../components/taked-button/taked-button'; 

export class PostItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			takeButtonState: false,
		};
  }

	handleClickRemove(idx) {
		const {
			removePost
		} = this.props;

    removePost(idx.key, idx.uid);
  }

  renderRemoveButton (key, uid) {
    return (
      <button 
        className="btn btn--remove status-text" 
        onClick={this.handleClickRemove.bind(this, {key, uid},)}
      >
      <Icon 
				className="push-half--right"
				name="remove" 
      />
       Remove
      </button>
    );
  }

  renderTakeButton (key, uid) {
    const {
			currentUser,
			takePost,
			postItem
		} = this.props;

		return (
			<TakedButton
				postItem={postItem}
				current={currentUser}
				handleButtonTaked={this.handleButtonTaked}
				postId={key}
				takePost={takePost}
				uid={uid}
				handleTakeButton={this.handleTakeButton}
			/>
		);
  }

	render () {
		const {
			postItem,
			currentUser,
			id
		} = this.props;

		const renderPostItem = () => {
			const {
				date,
				displayName,
				uid,
				photoURL,
				status,
				type
			} = postItem;
				
			return (
				<div>
					<div className="status-list__row slide">
						<div className="grid">
							<div className="grid__item one-fifth">
								<div className="user-avatar">
									<img src={photoURL} />
								</div>
								<span className="status-text">{displayName}</span>
							</div>
							<div className="grid__item one-fifth">
								<span className="status-text">{date}</span>
							</div>
							<div className="grid__item one-fifth">
								<span className="status-text--free">{status}</span>
							</div>
							<div className="grid__item one-fifth">
								<span className="status-text">{type}</span>
							</div>
							<div className="grid__item one-fifth">
								<div>
									{ currentUser.uid === uid 
										? this.renderRemoveButton(id, uid)
										: this.renderTakeButton(id, uid)
									}
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		};

		return (
			<div>
				{renderPostItem()}
			</div>
		);
	}
}

PostItem.propTypes = {
	currentUser: PropTypes.object,
  postItem: PropTypes.object,
  removePost: PropTypes.func,
  takePost: PropTypes.func,
  id: PropTypes.string
};

export default connect(null, actions)(PostItem);
