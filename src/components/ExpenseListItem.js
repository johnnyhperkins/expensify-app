import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = ({description, amount, createdAt, id}) => (
    <div>
        <h3><Link to={"/edit/" + id}>Description: {description}</Link></h3>
        <p>
            {numeral(amount / 100).format('$0,0.00')} 
            - 
            {moment(createdAt).format('MMMM Do YYYY')}
        </p>
    </div>
);

//in this case, connect() gives ExpenseListItem access to the dispatch prop, which is passed into the object the component takes as its argument
export default ExpenseListItem;
