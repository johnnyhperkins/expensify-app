import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { editExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };
    onRemove = () => {
        this.props.startRemoveExpense( {id: this.props.expense.id} );
        this.props.history.push('/');  
    };

    render() {
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit} />
                <button onClick={this.onRemove}>Remove</button>
            </div>
        );
    }
}

//can now access state. to just access dispatch, you only need connect()
const mapStateToProps = (state, props) => {
    return {
        //the compenent above now has access to this exact part of the state, as defined below. We then pass state as an argument to the component above, and that argument is the object which we create (define) here. It could be anything, but in this case it's a single expense. In the component above, the state argument that is passed will be the expense with the matching ID. BUT it also adds it into the props object as props.expense which we define HERE:
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        editExpense: (id,expense) => dispatch(editExpense(id,expense)),
        startRemoveExpense: ( data ) => dispatch(startRemoveExpense(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);