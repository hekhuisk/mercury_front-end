import * as FetchUtil from '../util/FetchUtil';

const createPaymentSource = (paymentSource) => {
    return FetchUtil.fetchPOST('/paymentSource', paymentSource);
};

const deletePaymentSource = (paymentSourceID) => {
    return FetchUtil.fetchDELETE(`/paymentSource/${paymentSourceID}`);
};

const getAllPaymentSources = () => {
    return FetchUtil.fetchGET('/paymentSource');
}

const getPaymentSource = (paymentSourceID) => {
    return FetchUtil.fetchGET(`/paymentSource/${paymentSourceID}`);
};

const updatePaymentSource = (paymentSourceID, paymentSource) => {
    return FetchUtil.fetchPUT(`/paymentSource/${paymentSourceID}`, paymentSource);
};

export {
    createPaymentSource,
    deletePaymentSource,
    getAllPaymentSources,
    getPaymentSource,
    updatePaymentSource
};