import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
    {
        props.expenses.length === 0 ? (
            <p>No expenses</p>
        ) : (
            props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />
        })
        )
    }
        {/* LONG WAY: <ExpenseListItem key={expense.id} description={expense.description} amount={expense.amount} createdAt = {expense.createdAt} /> 
        BETTER WAY: using the spread operator which just takes the expense object and passes it down into ExpenseListItem, which takes an object {description, amount, createdAt} as its argument. But those are only a few of the properties from that object. Also available are the dispatch function and id */}
        
    </div>
);

// you create a function inside of connect() that determines what information from the store you want the component (indicated at the end in parenthesis) to connect or have access to

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

//this whole process is simply a way to connect a component to as many or few parts of the store as we want. This line simply says connect the following data from state (store) and pass it to ExpenseLists's props, giving it all the access and benefits
export default connect(mapStateToProps)(ExpenseList);