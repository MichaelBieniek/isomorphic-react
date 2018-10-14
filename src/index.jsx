import App from './App'; // no need to specify extension because of webpack
import ReactDOM from 'react-dom';
import React from 'react';
import getStore from './getStore';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
const history = createHistory();

const store = getStore(history);

const fetchDataForLocation = location => {
	if (location.pathname === "/") {
		store.dispatch({ type: 'REQUEST_FETCH_QUESTIONS' });
	}
	if (location.pathname.includes('questions')) {
		store.dispatch({ type: 'REQUEST_FETCH_QUESTION', question_id: location.pathname.split('/')[2] });
	}	
};

const render = (_App) => {
	ReactDOM.render(
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<_App />
			</ConnectedRouter>		
		</Provider>,
		document.getElementById('AppContainer')
	)
}

// hot reloading w/out refresh
if (module.hot) {
	// this should cause the parent App to re-render without causing saga to run again
	module.hot.accept('./App', () => {
		const NextApp = require('./App').default;
		render(NextApp);
	});
}

// this will mount the app oncce the actual state is fetched
store.subscribe( () => {
	const state = store.getState();
	if (state.questions.length > 0) {
		console.info("Mounting app");
		render(App);
	} else {
		console.info("App not yet mounted");
	}
})

fetchDataForLocation(history.location);