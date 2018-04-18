import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
//thunk works with firebase to allow dispatching after asynchronous actions like making DB queries and updates
import thunk from 'redux-thunk';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';
import modalReducer from '../reducers/modal';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer,
            auth: authReducer,
            showModal: modalReducer
        }),
        composeEnhancers(applyMiddleware(thunk)) 
    );
    return store;
};