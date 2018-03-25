import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListItem } from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render ExpenseListItem with a test expenses', () => {
    const sampleExpense = expenses[0];
    const wrapper = shallow(<ExpenseListItem key={sampleExpense.id} {...sampleExpense} />);
    expect(wrapper).toMatchSnapshot();
});