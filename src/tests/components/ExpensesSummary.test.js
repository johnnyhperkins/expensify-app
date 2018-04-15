import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should render ExpensesSummary component with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary component with multiple expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={4} expenseTotal={235000} />);
    expect(wrapper).toMatchSnapshot();
});