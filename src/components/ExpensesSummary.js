import React from 'react';
import { connect } from 'react-redux';
import expensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummary = ({expenseCount, expenseTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    return (
        <div>
            <p>Displaying {expenseCount} {expenseWord} totalling {numeral( expenseTotal / 100 ).format('$0,0.00')} </p>
        </div>
    );
};

//Whatever object I return in this function is passed as props above. The function below has access to the global state via connect
const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: expensesTotal(visibleExpenses)
    }
};

export default connect(mapStateToProps)(ExpensesSummary);