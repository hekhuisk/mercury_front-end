import * as FetchUtil from '../util/FetchUtil';

const createIncome = (income) => {
    return FetchUtil.fetchPOST('/income', income);
};

const deleteIncome = (incomeID) => {
    return FetchUtil.fetchDELETE(`/income/${incomeID}`);
};

const getAllIncomes = () => {
    return FetchUtil.fetchGET('/income');
}

const getIncome = (incomeID) => {
    return FetchUtil.fetchGET(`/income/${incomeID}`);
};

const updateIncome = (incomeID, income) => {
    return FetchUtil.fetchPUT(`/income/${incomeID}`, income);
};

export {
    createIncome,
    deleteIncome,
    getAllIncomes,
    getIncome,
    updateIncome
};