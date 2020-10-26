import * as types from './types';

const initialState = {
    paymentSources: {
        1: { name: 'test1', paymentSourceID: 4}
    }
};

const paymentSourceReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default paymentSourceReducer;