import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = ({description, amount, createdAt, id}) => (
        <Link className="list-item" to={"/edit/" + id}>
            <div>
                <h3 className="list-item__title">Description: {description}</h3>
                <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do YYYY')}</span>
            </div>
            <h3 className="list-item__data">{numeral(amount / 100).format('$0,0.00')}</h3>
        </Link>
);

//in this case, connect() gives ExpenseListItem access to the dispatch prop, which is passed into the object the component takes as its argument
export default ExpenseListItem;
