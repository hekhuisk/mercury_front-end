import * as FetchUtils from '../utils/FetchUtils';

const createPaymentSource = (paymentSource) => {
    return FetchUtils.fetchPOST('/paymentSource', paymentSource);
};

const deletePaymentSource = (paymentSourceID) => {
    return FetchUtils.fetchDELETE(`/paymentSource/${paymentSourceID}`);
};

const getAllPaymentSources = () => {
    return FetchUtils.fetchGET('/paymentSource');
}

const getPaymentSource = (paymentSourceID) => {
    return FetchUtils.fetchGET(`/paymentSource/${paymentSourceID}`);
};

const updatePaymentSource = (paymentSourceID, paymentSource) => {
    return FetchUtils.fetchPUT(`/paymentSource/${paymentSourceID}`, paymentSource);
};

export {
    createPaymentSource,
    deletePaymentSource,
    getAllPaymentSources,
    getPaymentSource,
    updatePaymentSource
};