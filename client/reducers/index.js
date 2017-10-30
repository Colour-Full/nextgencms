import { combineReducers } from 'redux';
import getCharacters from './actions_characters/get_characters.js';
import loadingCharacters from './actions_characters/loading_characters.js';

const reducers = combineReducers({
	characters: getCharacters,
	loadCharacters: loadingCharacters,
});

export default reducers;
