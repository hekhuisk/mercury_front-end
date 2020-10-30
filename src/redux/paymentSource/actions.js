import * as types from './types';

const fetchPaymentSources = () => ({
    type: types.PAYMENT_SOURCES_FETCH_REQUESTED
});

const requestFetchPaymentFailed = (message) => ({
    type: types.PAYMENT_SOURCES_FETCH_FAILED,
    message
});

const requestFetchPaymentSucceeded = (paymentSources) => ({
    type: types.PAYMENT_SOURCES_FETCH_SUCCEEDED,
    paymentSources
});

export {
    fetchPaymentSources,
    requestFetchPaymentFailed,
    requestFetchPaymentSucceeded
}