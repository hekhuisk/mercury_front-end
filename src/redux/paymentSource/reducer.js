import * as types from './types';

const initialState = {
    paymentSources: {}
};

const paymentSourceReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.PAYMENT_SOURCES_FETCH_FAILED: {
            console.log(action.message);
            return state;
        }

        case types.PAYMENT_SOURCES_FETCH_SUCCEEDED: {
            const newState = { ...state };
            action.paymentSources.forEach((paymentSource) =>
                newState.paymentSources[`${paymentSource.paymentSourceID}`] = paymentSource
            );
            return newState;
        }

        default:
            return state;
    }
};

export default paymentSourceReducer;