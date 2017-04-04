import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/posts/posts';

export class PostList extends Component {
	handleClick() {
    this.props.removePost(this.props.id);
  }

	render () {
		const {
			postItem
		} = this.props;

		return (
			<div>
				<div className="status-list__row">
					<div className="grid">
						<div className="grid__item one-fifth">
							<div className="user-avatar">
								<img src={"https://pbs.twimg.com/profile_images/439719495/seriousicon_400x400.jpg"} />
							</div>
							<span className="status-text">{postItem.name} {postItem.last}</span>
						</div>
						<div className="grid__item one-fifth">
							<span className="status-text">{postItem.date}</span>
						</div>
						<div className="grid__item one-fifth">
							<span className="status-text--free">Free</span>
						</div>
						<div className="grid__item one-fifth">
							<span className="status-text">Normal</span>
						</div>
						<div className="grid__item one-fifth">
							<button className="btn btn--take status-text" onClick={this.handleClick.bind(this)}>Remove</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

PostList.propTypes = {
  postItem: PropTypes.object,
  removePost: PropTypes.func,
  id: PropTypes.string
};

export default connect(null, actions)(PostList);