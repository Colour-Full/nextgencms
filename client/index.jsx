import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers';
import Characterslist from './containers/character_list.jsx';

const store = createStore(reducers, applyMiddleware(thunk, logger));


const App = () => {
	return (
		<div>
			<Characterslist />
		</div>
	);
};

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
document.querySelector('.container'));
