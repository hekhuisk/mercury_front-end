import * as types from './types';

const fetchCategories = () => ({
    type: types.CATEGORIES_FETCH_REQUESTED
});

const requestFetchCategoriesFailed = (message) => ({
    type: types.CATEGORIES_FETCH_FAILED,
    message
});

const requestFetchCategoriesSucceeded = (expenseCategories, incomeCategories) => ({
    type: types.CATEGORIES_FETCH_SUCCEEDED,
    expenseCategories,
    incomeCategories
});

export {
    fetchCategories,
    requestFetchCategoriesFailed,
    requestFetchCategoriesSucceeded
}