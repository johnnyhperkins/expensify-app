import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';
import uuid from 'uuid';


test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const description = 'test expense';
    const note = 'note';
    const amount = 1000;
    const createdAt = moment();
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, action.expense]);
});

test('should edit an expense', () => {
    const updates = {
        note: 'hello'
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        ...updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should not edit expense if expense not found', () => {
    const updates = {
        note: 'hello'
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: -1,
        ...updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});