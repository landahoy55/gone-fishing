import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'; //provider allows the store to be passed to all components

import AppRouter from './routers/AppRouter';
import configureStore from './store/configStore';
import { addSession } from './actions/sessions';
import { setLocationFilter }  from './actions/filters';
import { setNoteFilter } from './actions/filters';
import { getFilteredSessionsByLocation } from './selectors/sessions';

//CSS - can bring in styles.css or component css.
import 'normalize.css/normalize.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const store = configureStore();

//add session
store.dispatch(addSession( { location: 'Torquay', note: 'Catching fish'} ));
store.dispatch(addSession( { location: 'Plymouth', note: 'Note many fish today'} ));
// store.dispatch(setLocationFilter('plymouth'));

// const state = store.getState();
// const visibleSessions = getFilteredSessionsByLocation(state.sessions, state.filters);
//console.log(store.getState());

store.subscribe(()=>{
    console.log(store.getState())
});

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider> 
);

ReactDOM.render(jsx, document.getElementById('app'));
