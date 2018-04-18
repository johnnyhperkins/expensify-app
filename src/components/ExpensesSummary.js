import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import expensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';


export const ExpensesSummary = ({expenseCount, expenseTotal, allExpensesCount}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const hiddenExpensesCount = allExpensesCount - expenseCount;
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Displaying <span>{expenseCount}</span> {expenseWord} totalling <span>{numeral( expenseTotal / 100 ).format('$0,0.00')}</span> </h1>
                {hiddenExpensesCount > 0 && <p className="page-header__hidden-expenses">{hiddenExpensesCount} expenses hidden by filters</p>}
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    );
};

// Whatever object I return in this function is passed as props above. 
// The function below has access to the global state via connect
const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    const allExpenses = state.expenses;
    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: expensesTotal(visibleExpenses),
        allExpensesCount: allExpenses.length
    }
};

export default connect(mapStateToProps)(ExpensesSummary);