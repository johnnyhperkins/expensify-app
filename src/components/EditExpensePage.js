import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import { toggleModal } from '../actions/modal';
import ConfirmationModal from './ConfirmationModal';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };
    onRemove = () => {
        this.props.toggleModal();
        this.props.startRemoveExpense( {id: this.props.expense.id} );
        this.props.history.push('/');  
    };
    handleToggleModal = () => {
        this.props.toggleModal();
    };

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit} />
                    <button className="button--secondary" onClick={this.handleToggleModal}>Remove</button>
                    <ConfirmationModal 
                        isOpen={this.props.showModal} 
                        onRemove={this.onRemove} 
                        handleCloseModal={this.handleToggleModal}
                        expenseDescription={this.props.expense.description} />
                </div>
            </div>
        );
    };
}

//can now access state. to just access dispatch, you only need connect()
const mapStateToProps = (state, props) => {
    return {
        //the compenent above now has access to this exact part of the state, as defined below. We then pass state as an argument to the component above, and that argument is the object which we create (define) here. It could be anything, but in this case it's a single expense. In the component above, the state argument that is passed will be the expense with the matching ID. BUT it also adds it into the props object as props.expense which we define HERE:
        expense: state.expenses.find((expense) => expense.id === props.match.params.id),
        showModal: state.showModal
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        startEditExpense: (id,expense) => dispatch(startEditExpense(id,expense)),
        startRemoveExpense: ( data ) => dispatch(startRemoveExpense(data)),
        toggleModal: () => dispatch(toggleModal())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);