import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//Add session - including default values.
const addSessionTorquay = (
    {
        location = 'Torquay',
        lat = '50.46384',
        long = '3.51434',
        tide = '',
        temperature = '',
        weatherDesc = '',
        sessionStart = 0,
        sessionEnd = 0,
        didCatch = false,
        numberCaught = 0,
        note = '',
    } = {}
) => ({
    type: 'ADD_SESSION_TORQUAY',
    session: {
        id: uuid(),
        location,
        lat,
        long,
        tide, //call http func
        temperature, //call http func
        weatherDesc, //call http func
        sessionStart, 
        sessionEnd, 
        didCatch,
        numberCaught,
        note
    }
});

//Remove session
const removeSession = ( { id } = {}) => ({
    type: 'REMOVE_SESSION',
    id
});

//Edit session
const editSession = (id, update) => ({
    type: 'EDIT_SESSION',
    id,
    update
});

//setLocationFilter
const setLocationFilter = ( location = '') => ({
    type: 'SET_LOCATION_FILTER',
    location
});

//setLocationFilter
const setTideFilter = ( tide = '') => ({
    type: 'SET_TIDE_FILTER',
    tide
});

//setLocationFilter
const setNoteFilter = ( note = '') => ({
    type: 'SET_NOTE_FILTER',
    note
});

//sortByCatch
const sortByCatch = () => ({
    type: 'SORT_BY_CATCH'

})

//Reducer to manager sessions - reducer is very similar to the factory pattern
//Includes default state
const sessionsReducerDefault = [];

const sessionsReducer = (state = sessionsReducerDefault, action) => {
    switch (action.type) {
        case 'ADD_SESSION_TORQUAY': //using array spread to add on to array
            return [...state,
                    action.session
                ];
        case 'REMOVE_SESSION':
            return state.filter(( { id }) => {
                return id !== action.id;
            });
        case 'EDIT_SESSION':
            return state.map((session) => {
                if(session.id === session.id) {
                    return {
                        ...session,
                        ...action.update //using object spread operator to take updates and modify exisiting session
                    }
                } else {
                    return session;
                } 
            });
        default: 
            return state;
    }
};

const filtersDefault = {
    location: '', //by town
    note: '', //in notes
    tide: '', //low or high
    didCatch: undefined
};

const filtersReducer = (state = filtersDefault, action) => {
    switch (action.type) {
        case 'SET_LOCATION_FILTER':
            return { //using object spread opeator, create a new object from an existing one
                ...state,
                location: action.location
            };
        case 'SET_TIDE_FILTER':
            return { 
                ...state,
                tide: action.tide
            };
        case 'SET_NOTE_FILTER':
            return { 
                ...state,
                note: action.note
            };
        case 'SORT_BY_CATCH': 
            return {
                ...state,
                tide: '',
                note: '',
                location: '',
                didCatch: true
            };
        default: 
            return state;
    }
};


//get filtered sessions
//use filter to check through sessions, return only that with a location matching the specifified filter
const getFilteredSessionsByLocation = (sessions, filters) => {
    return sessions.filter((session) => {
        const locationMatch = session.location.toLowerCase().includes(filters.location.toLowerCase());
        return locationMatch;
    });
};

//get filtered sessions by note
//use filter to check through sessions, return only that with a note matching the specified filter
const getFilteredSessionsByNote = (sessions, filters) => {
    return sessions.filter((session) => {
        const noteMatch = session.note.toLowerCase().includes(filters.note.toLowerCase());
        return noteMatch;
    });
};

//create state store adding multiple reducers.
const store = createStore(combineReducers({
    sessions: sessionsReducer,
    filters: filtersReducer
}))

store.subscribe(() => {
    const state = store.getState();
    const filteredSessions = getFilteredSessionsByLocation(state.sessions, state.filters);
    console.log(filteredSessions);
});

const sessionOne = store.dispatch(addSessionTorquay( { note: 'Catching fish'} ));
const sessionTwo = store.dispatch(addSessionTorquay( { note: 'Note many fish today'} ));

//store.dispatch(removeSession({ id: sessionOne.session.id }));
//  store.dispatch(editSession(sessionTwo.session.id, { note: 'Lots more fishes actually!' } ));
store.dispatch(setLocationFilter('torquay'));
// store.dispatch(setNoteFilter('mackerel'));
// store.dispatch(setTideFilter('low'));
// store.dispatch(sortByCatch());

const demoState = {
    sessions: [{
        id: 'asdsdfsdf',
        lat: '34.555555',
        long: '234234345',
        location: 'Torquay',
        tide: 'low',
        temperature: 23,
        sessionStart: 10000,
        sessionEnd: 100000,
        didCatch: true,
        numberCaught: 3,
        note: 'Plenty of mackerel about today'
    }],
    filters: {
        location: '',
        text: '', //in notes
        tide: '', //low or high
        didCatch: undefined
    }
}


