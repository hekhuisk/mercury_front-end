import * as FetchUtil from '../util/FetchUtil';

const createExpense = (expense) => {
    return FetchUtil.fetchPOST('/expense', expense);
};

const deleteExpense = (expenseID) => {
    return FetchUtil.fetchDELETE(`/expense/${expenseID}`);
};

const getAllExpenses = () => {
    return FetchUtil.fetchGET('/expense');
}

const getExpense = (expenseID) => {
    return FetchUtil.fetchGET(`/expense/${expenseID}`);
};

const updateExpense = (expenseID, expense) => {
    return FetchUtil.fetchPUT(`/expense/${expenseID}`, expense);
};

export {
    createExpense,
    deleteExpense,
    getAllExpenses,
    getExpense,
    updateExpense
};