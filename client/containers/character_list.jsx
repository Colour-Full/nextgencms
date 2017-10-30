import React, { Component } from 'react';
import { connect } from 'react-redux';
import { charactersFetchData } from '../actions/index.js';
import _ from 'lodash';
import '../../server/public/scss/style.scss';
import { CSSTransitionGroup } from 'react-transition-group';

class Characterslist extends Component {
	constructor (props) {
		super(props);
		this.renderCharactersList = this.renderCharactersList.bind(this);
	}

	componentDidMount () {
		const API_URL = 'http://localhost:3000/api/characters/?list';
		this.props.fetchCharacters(API_URL);
	}

	renderCharactersList () {
		return _.map(this.props.characters, character => {
			const img = character.image ? character.image.filename : '';
			function createMarkup () {
				if (character.bio.brief) {
					return {
						__html: character.bio.brief,
					};
				} else {
					return;
				}
			};
			return (
				<div key={character._id} className={'col s12 m4'}>
					<div className="card">
						<div className="card-image">
							<img src={img} />
							<span className="card-title">{character.name}</span>
							<a className="btn-floating halfway-fab waves-effect waves-light red">
								<i className="material-icons">add</i>
							</a>
						</div>
						<div className="card-content">
							<p dangerouslySetInnerHTML={createMarkup()} />
						</div>
					</div>
				</div>
			);
		});
	}
	render () {
		if (this.props.loadPosts) {
			return (
				<div>
					<p>Loading</p>
				</div>
			);
		}
		return (
			<div className="row">
				<CSSTransitionGroup
					transitionName="fadeIn"
					transitionEnterTimeout={1000}
					transitionLeaveTimeout={300}>
					{this.renderCharactersList()}
				</CSSTransitionGroup>
			</div>
		);
	}
};

function mapStateToProps (state, ownProps) {
	// Things return here are showing in props for Characters
	return {
		characters: state.characters,
		loading: state.loadCharacters,
	};
}

// anything returned from here will end up in the props
const mapDispatchToProps = dispatch => ({
	fetchCharacters: (url) => dispatch(charactersFetchData(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Characterslist);
