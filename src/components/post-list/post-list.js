import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/posts/posts';
import _ from 'lodash';

export class PostList extends Component {
	handleClick(idx) {
		const {
			removePost
		} = this.props;

    removePost(idx.key, idx.uid);
  }

	render () {
		const {
			postItem
		} = this.props;

		const renderPostItem = () => {
			return _.map(postItem, (userItem, key) => {
				const uid = userItem.uid;
				return (
					<div key={key}>
						<div className="status-list__row">
							<div className="grid">
								<div className="grid__item one-fifth">
									<div className="user-avatar">
										<img src={userItem.photoURL} />
									</div>
									<span className="status-text">{userItem.displayName}</span>
								</div>
								<div className="grid__item one-fifth">
									<span className="status-text">{userItem.date}</span>
								</div>
								<div className="grid__item one-fifth">
									<span className="status-text--free">{userItem.last} Free</span>
								</div>
								<div className="grid__item one-fifth">
									<span className="status-text">Normal</span>
								</div>
								<div className="grid__item one-fifth">
									<button className="btn btn--take status-text" onClick={this.handleClick.bind(this, {key, uid},)}>Remove</button>
								</div>
							</div>
						</div>
					</div>
				);
			});
		};
		return (
			<div>
				{renderPostItem()}
			</div>
		);
	}
}

PostList.propTypes = {
	currentUser: PropTypes.object,
  postItem: PropTypes.object,
  removePost: PropTypes.func,
  id: PropTypes.string
};

export default connect(null, actions)(PostList);
