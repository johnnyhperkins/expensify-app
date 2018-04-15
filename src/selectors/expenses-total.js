export default (expenses = []) => {
    if(expenses.length) {
        return expenses.reduce((sum, expense) => {
            return sum + expense.amount;
        }, 0);  
    }
    else {
        return 0;
    }
};