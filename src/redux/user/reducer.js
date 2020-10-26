import * as types from './types';

const initialState = {
    budgetID: 1,
    userID: 1
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN: {
            return state;
        }

        default:
            return state;
    }
};

export default userReducer;