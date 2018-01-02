import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

export default class Character extends Component {
	constructor (props) {
		super(props);
		this.animateIntro = this.animateIntro.bind(this);
		this.animateOutro = this.animateOutro.bind(this);
		this.state = {
			in: false,
		};
	}

	componentDidMount () {
		this.animateIntro();
	}

	componentWillUpdate (nextProps, nextState) {
		if (this.state.in) {
			this.animateOutro();
		}
	}

	animateIntro () {
		this.setState({
			in: true,
		});
	}

	animateOutro () {
		this.setState({
			in: false,
		});
	}
	render () {
		return (
			<CSSTransition
				in={this.state.in}
				classNames="fadeIn"
				timeout={1000}
			>
				<div key className={'col s12 m4'}>
					<div className="card">
						<div className="card-image">
							<img className="z-depth-3" src={this.props.img} />
							<a className="btn-floating  btn-large halfway-fab waves-effect waves-light red z-depth-4" onClick={this.props.click}>
								<i className={`material-icons add-character ${this.props.character_slug}`}>add</i>
							</a>
						</div>
						<div className="card-content">
							<h5 className="thin">{this.props.character_name}</h5>
						</div>
					</div>
				</div>

			</CSSTransition>
		);
	}
}
