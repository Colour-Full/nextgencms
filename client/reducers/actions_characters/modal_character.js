import { MODAL_CHARACTER } from '../../actions/index.js';


export default function getModalCharacter (state = {}, action) {
	switch (action.type) {
		case MODAL_CHARACTER:
			return (action.payload);
	}
	return state;
}
