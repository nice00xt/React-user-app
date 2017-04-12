import React, { Component } from 'react';

export class UserPosts extends Component {
	render () {
		return (
			<div>
				<section className="content">
					<div className="content__list">
						<div className="container">
							<div className="status-list">
								<div className="status-list__titles">
									<div className="clearfix" />
									<div className="grid">
										<div className="grid__item one-fifth">
											<span>USER</span>
										</div>
										<div className="grid__item one-fifth">
											<span>SUBMITTED</span>
										</div> 
										<div className="grid__item one-fifth">
											<span>STATUS</span>
										</div>
										<div className="grid__item one-fifth">
											<span>TYPE</span>
										</div>
									</div>
								</div>
								post list
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}