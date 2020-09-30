let internalExpenseID = 1;

function createExpenseData(expenseID, description, date, category, paymentSource, cost) {
    return { expenseID, description, date, category, paymentSource, cost };
}

const expenseData = new Map();
expenseData.set(internalExpenseID, createExpenseData(internalExpenseID++, 'Gemmens', '10/10/2020', 'Home - Maintenance', 'Visa', 4.30));
expenseData.set(internalExpenseID, createExpenseData(internalExpenseID++, 'Mobile', '10/10/2020', 'Vehicle - Gas', 'Visa', 10.50));
expenseData.set(internalExpenseID, createExpenseData(internalExpenseID++, 'Meijer', '10/10/2020', 'Grocery', 'Visa', 50.10));

const createExpense = (expense) => {
    const {
        description, date, category, paymentSource, cost
    } = expense;

    expenseData.set(internalExpenseID, createExpenseData(internalExpenseID++, description, date, category, paymentSource, cost));
};

const deleteExpense = (expenseID) => {
    expenseData.delete(expenseID);
}

const editExpense = (expense) => {
    const {
        expenseID, description, date, category, paymentSource, cost
    } = expense;

    expenseData.set(expenseID, createExpenseData(expenseID, description, date, category, paymentSource, cost));
};

const getExpense = (expenseID) => {
    return expenseData.get(expenseID);
};

const getExpenses = () => {
    return Array.from(expenseData.values());
};

export {
    createExpense,
    deleteExpense,
    editExpense,
    getExpense,
    getExpenses
};