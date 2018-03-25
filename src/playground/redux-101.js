import {createStore} from 'redux';

// Action generators

const incrementCount = ({ incrementBy =  1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
    // incrementBy: typeof incrementBy === 'number' ? incrementBy : 1
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({ setTo } = {}) => ({
    type: 'SET',
    setTo
});

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.setTo
            }
        default:
            return state;
    }
};

const store = createStore();

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
 });


// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

// unsubscribe();

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10}));

store.dispatch(setCount({ setTo: 101}));



// NOTES:

// THIS:

// const add = (data) => {
//     return data.a + data.b;
// };

// console.log(add({a:1,b:2}));

// is the same as 

// const add = ( {a, b}, c ) => {
//     return a + b + c;
// };

// console.log(add({a:1,b:2}, 44));