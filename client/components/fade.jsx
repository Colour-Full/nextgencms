import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../../server/public/scss/style.scss';

export default class Fade extends Component {
	constructor (props) {
		super(props);
		this.state = {
			fade: true,
		};
	}
	render () {
		return (

				{this.props.children}
			</CSSTransition>
		);
	}
}
