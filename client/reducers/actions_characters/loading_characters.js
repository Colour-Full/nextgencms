import { LOADING_CHARACTERS } from '../../actions/index.js';

export default function loadingCharacters (state = true, action) {
	switch (action.type) {
		case LOADING_CHARACTERS:
			return action.payload;
	}
	return state;
}
