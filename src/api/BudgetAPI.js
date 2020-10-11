import * as FetchUtils from '../utils/FetchUtils';

const createBudget = (budget) => {
    return FetchUtils.fetchPOST('/budget', budget);
};

const deleteBudget = (budgetID) => {
    return FetchUtils.fetchDELETE(`/budget/${budgetID}`);
};

const getAllBudgets = () => {
    return FetchUtils.fetchGET('/budget');
}

const getBudget = (budgetID) => {
    return FetchUtils.fetchGET(`/budget/${budgetID}`);
};

const updateBudget = (budgetID, budget) => {
    return FetchUtils.fetchPUT(`/budget/${budgetID}`, budget);
};

export {
    createBudget,
    deleteBudget,
    getAllBudgets,
    getBudget,
    updateBudget
};