import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const result = selectExpensesTotal([]);
    expect(result).toEqual(0);
});

test('should correctly add up a single expense', () => {
    const result = selectExpensesTotal([expenses[1]]);
    expect(result).toEqual(expenses[1].amount);
});

test('should correctly add up multiple expenses', () => {
    const result = selectExpensesTotal([expenses[1], expenses[0]]);
    expect(result).toEqual(expenses[1].amount + expenses[0].amount);
});