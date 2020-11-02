import * as types from './types';

const initialState = {
    expenseCategories: {},
    incomeCategories: {}
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CATEGORIES_FETCH_FAILED: {
            console.log(action.message);
            return state;
        }

        case types.CATEGORIES_FETCH_SUCCEEDED:
            return {
                ...state,
                expenseCategories: action.expenseCategories,
                incomeCategories: action.incomeCategories

            };

        default:
            return state;
    }
};

export default categoryReducer;