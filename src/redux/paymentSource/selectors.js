const getPaymentSourcesAsArray = (state) => Object.values(state.paymentSource.paymentSources);

const getPaymentSourceDropdownOptions = (state) => getPaymentSourcesAsArray(state).map((paymentSource) => ({
    key: paymentSource.name,
    text: paymentSource.name,
    value: paymentSource.paymentSourceID
}));

const makeGetPaymentSourceName = (state) => (paymentSourceID) => {
    const paymentSource = state.paymentSource.paymentSources[paymentSourceID];
    return paymentSource ? paymentSource.name : '';
}

export {
    getPaymentSourcesAsArray,
    getPaymentSourceDropdownOptions,
    makeGetPaymentSourceName
}