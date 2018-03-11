import { combineReducers } from 'redux';
import getCharacters from './actions_characters/get_characters.js';
import loadingCharacters from './actions_characters/loading_characters.js';
import getModalCharacter from './actions_characters/modal_character.js';

const reducers = combineReducers({
	characters: getCharacters,
	loadCharacters: loadingCharacters,
	modalCharacter: getModalCharacter,
});

export default reducers;
