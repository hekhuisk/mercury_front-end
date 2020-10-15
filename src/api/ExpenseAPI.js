import * as FetchUtils from '../util/FetchUtil';

const createExpense = (expense) => {
    return FetchUtils.fetchPOST('/expense', expense);
};

const deleteExpense = (expenseID) => {
    return FetchUtils.fetchDELETE(`/expense/${expenseID}`);
};

const getAllExpenses = () => {
    return FetchUtils.fetchGET('/expense');
}

const getExpense = (expenseID) => {
    return FetchUtils.fetchGET(`/expense/${expenseID}`);
};

const updateExpense = (expenseID, expense) => {
    return FetchUtils.fetchPUT(`/expense/${expenseID}`, expense);
};

export {
    createExpense,
    deleteExpense,
    getAllExpenses,
    getExpense,
    updateExpense
};