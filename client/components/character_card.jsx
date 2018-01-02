import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

export default class CharacterCard extends Component {
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
			<div className="overlay overlay-fixed-container">
				<div className="row">
					<CSSTransition
						in={this.state.in}
						classNames="fadeIn"
						timeout={1000}
					>
						<div className={'col s12 m8 offset-m2'}>
							<div className="card z-depth-5">
								<button className="btn-floating btn-large button-close waves-effect waves-light red z-depth-4" onClick={this.props.click}>
									<i onClick={this.animateOutro} className="material-icons medium">close</i>
								</button>

								<div className="card-image">
									<img className="modal-image z-depth-3" src={this.props.img} />
								</div>
								<div className="card-content">
									<h5 className="thin">{this.props.character_name}</h5>
									<div dangerouslySetInnerHTML={this.props.character_bio} />
								</div>
							</div>
						</div>
					</CSSTransition>
				</div>
			</div>
		);
	}
}
