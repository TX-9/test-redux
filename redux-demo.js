const redux = require('redux');

// Redicer is executed for the first time at initialization
// so counter will be 1 even before dispatch
const counterReducer = (state = {counter: 0}, action) => {
    if (action.type === 'ADD') {
        return {
            counter: state.counter + 1
        };
    }

    if (action.type === 'SUBTRACT') {
        return {
            counter: state.counter - 1
        };
    }

    return state;
};
const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: 'ADD'}); // Action as parameter
store.dispatch({ type: 'SUBTRACT'}); // Action as parameter