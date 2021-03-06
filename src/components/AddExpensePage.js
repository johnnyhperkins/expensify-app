import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        // props.dispatch(addExpense(expense));
        this.props.startAddExpense(expense);
        //redirects to the dashboard
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add Expense</h1>
                    </div>
                </div>
                {/* the 'expense' object being passed in here gives us all its properties back (description, amount, note and cratedAt) from the submitted form */}
                <div className="content-container">
                    <ExpenseForm onSubmit={this.onSubmit} />
                </div>
                {/* <p>Editing this id: {props.match.params.id}</p> */}
            </div> 
        );  
    }
}

const mapDispatchToProps = (dispatch)  => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

//now we have access to props.dispatch
//map dispatch to props does something very similar to mapStateToProps... it adds an object to props that we get to define with the mapDispatchToProps function. It takes in dispatch as an argument and lets us create a method on props that, in this case, takes in the expense object and dispatches it to the store with the addExpense action.

export default connect(undefined, mapDispatchToProps)(AddExpensePage);