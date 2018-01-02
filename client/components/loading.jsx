import React, { Component } from 'react';

export default class Loading extends Component {
	render () {
		return (
			<div className="vc-align">
				<div className="preloader-wrapper big active">
					<div className="spinner-layer spinner-white-only">
						<div className="circle-clipper left">
							<div className="circle"/>
						</div>
					</div>
				</div>
			</div>
		);
	}
};
