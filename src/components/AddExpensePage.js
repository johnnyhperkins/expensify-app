import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        // props.dispatch(addExpense(expense));
        this.props.addExpense(expense);
        //redirects to the dashboard
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <h1>ADD Expense</h1>
                {/* the 'expense' object being passed in here gives us all its properties back (description, amount, note and cratedAt) from the submitted form */}
                <ExpenseForm onSubmit={this.onSubmit} />

                {/* <p>Editing this id: {props.match.params.id}</p> */}
            </div>
        );  
    }
}

const mapDispatchToProps = (dispatch)  => ({ 
    addExpense: (expense) => dispatch(addExpense)
});

//now we have access to props.dispatch
//map dispatch to props does something very similar to mapStateToProps... it adds an object to props that we get to define with the mapDispatchToProps function. It takes in dispatch as an argument and lets us create a method on props that, in this case, takes in the expense object and dispatches it to the store with the addExpense action.

export default connect(undefined, mapDispatchToProps)(AddExpensePage);