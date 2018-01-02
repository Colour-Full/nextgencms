import React, { Component } from 'react';

export default class FullWindowOverlay extends Component {
	constructor (props) {
		super(props);
		this.state = {
			height: window.innerHeight,
		};
	}
	componentDidMount () {
		window.addEventListener('resize', (e) => {
			this.setState({
				height: window.innerHeight,
			});
		});
	}
	render () {
		return (
			<div className="overlay .overlay-relative-container" style={{ height: this.state.height }}>
				{this.props.children}
			</div>
		);
	}
}
