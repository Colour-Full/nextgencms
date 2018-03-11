import axios from 'axios';

export const LOADING_CHARACTERS = 'LOADING_CHARACTERS';
export const CHARACTERS_LIST = 'CHARACTERS_LIST';
export const MODAL_CHARACTER = 'MODAL_CHARACTER';

// An action to check if the posts are loaded excepts true or false
export function loadingCharacters (loading) {
	return {
		type: LOADING_CHARACTERS,
		payload: loading,
	};
}

// This will get the posts from the API
export function fetchCharacters (data) {
	return {
		type: CHARACTERS_LIST,
		payload: data,
	};
}

// This will get the posts from the API
export function fetchModalCharacter (modal) {
	return {
		type: MODAL_CHARACTER,
		payload: modal,
	};
}

// This is a redux thunk that will fetch our model data
export function charactersFetchData (url) {
	return (dispatch) => {
		const request = axios.get(url);
		request.then((response) => {
			dispatch(loadingCharacters(false));
			dispatch(fetchCharacters(response.data.characters));
		});
	};
}
