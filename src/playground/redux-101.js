import { createStore } from 'redux';

//action generator = function that returns the action object, so we don't have to create them all the time!
//helps to avoid type
const incrementCount = ({ incremementBy = 1 } = {}) => ({
        type: 'INCREMENT',
        incremementBy
});

const decrementCount = ({ decremementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decremementBy
});

//A store is where the data is kept. At a global level
//current state (default) passed as first argument. Gets called immediately.
const store = createStore((state = { count: 0 }, action) => {

    switch (action.type) {
        case 'INCREMENT':
        console.log('state:', state.count);
            //check type of icrementBy. return the number, or 1.
            return {
                count: state.count + action.incremementBy
            };

        case 'DECREMENT':

            return {
                count: state.count - action.decremementBy
            };

        case 'RESET':
            return {
                count: state.count = 0
            };
        default: 
            return state;
    }   
});

store.dispatch(incrementCount( { incremementBy: 6 } ));
console.log(store.getState());

store.dispatch(decrementCount( { decremementBy: 6 }));
console.log(store.getState());

