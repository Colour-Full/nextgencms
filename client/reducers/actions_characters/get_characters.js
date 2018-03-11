import { CHARACTERS_LIST } from '../../actions/index.js';
import _ from 'lodash';


export default function getCharacters (state = {}, action) {
	switch (action.type) {
		case CHARACTERS_LIST:
			return _.mapKeys(action.payload, 'slug');
	}
	return state;
}
