import React, { Component } from 'react';
import { connect } from 'react-redux';
import { charactersFetchData } from '../actions/index.js';
import { fetchModalCharacter } from '../actions/index.js';
import _ from 'lodash';
import '../../server/public/scss/style.scss';
import Loading from '../components/loading';
import FullWindowOverlay from '../components/full_window_overlay';
import CharacterCard from '../components/character_card';
import Character from '../components/character';
import { TransitionGroup } from 'react-transition-group';

class Characterslist extends Component {
	constructor (props) {
		super(props);
		this.renderCharactersList = this.renderCharactersList.bind(this);
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.createMarkup = this.createMarkup.bind(this);
		this.animateOutro = this.animateOutro.bind(this);
		this.getCharacterSlug = this.getCharacterSlug.bind(this);
		this.state = {
			open: false,
			character_slug: undefined,
			in: false,
		};
	}

	componentDidMount () {
		const API_URL = 'http://localhost:3000/api/characters/?list';
		setTimeout(() => { this.props.fetchCharacters(API_URL); }, 1000);
	}

	componentWillUpdate () {
		if (this.state.open) {
			this.animateIntro();
		}
	}

	animateIntro () {
		this.setState({
			in: false,
		});
	}

	animateOutro () {
		this.setState({
			open: false,
			character_slug: undefined,
		});
	}

	getCharacterSlug (slug_arr) {
		this.setState({
			open: true,
			character_slug: slug_arr[2],
		});
	}
	openModal (e) {
		const slug = e.target.className;
		const slug_arr = slug.split(' ');
		this.animateOutro();
		setTimeout(() => { this.getCharacterSlug(slug_arr); }, 500);
	}

	closeModal () {
		setTimeout(() => { this.animateOutro(); }, 500);
	}

	createMarkup () {
		const character = this.props.characters[this.state.character_slug];
		if (character.bio.brief) {
			return {
				__html: character.bio.extended,
			};
		} else {
			return;
		}
	};

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
				< Character
					key={character._id}
					img={img}
					character_name={character.name}
					content={createMarkup()}
					click={this.openModal}
					character_slug={character.slug}
				/>
			);
		});
	}
	render () {
		if (this.props.loading) {
			return (
				<FullWindowOverlay>
					<Loading/>
				</FullWindowOverlay>
			);
		}
		if (this.state.open) {
			const character = this.props.characters[this.state.character_slug];
			const img = character.image ? character.image.filename : 'There is no character image';
			return (
				<CharacterCard
					img={img}
					character_name={character.name}
					character_bio={this.createMarkup()}
					click={this.closeModal}
				/>
			);
		}
		if (!this.state.open) {
			return (
				<div>
					<div className="row">
						<TransitionGroup>
							{this.renderCharactersList()}
						</TransitionGroup>
					</div>
				</div>
			);
		}
	}
};

function mapStateToProps (state, ownProps) {
	// Things return here are showing in props for Characters
	return {
		characters: state.characters,
		loading: state.loadCharacters,
		modal: state.modalCharacter,
	};
}

// anything returned from here will end up in the props
const mapDispatchToProps = dispatch => ({
	fetchCharacters: (url) => dispatch(charactersFetchData(url)),
	modalCharacter: (character) => dispatch(fetchModalCharacter(character)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Characterslist);
