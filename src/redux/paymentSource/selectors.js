const getPaymentSourcesAsArray = (state) => Object.values(state.paymentSource.paymentSources);

const getPaymentSourceDropdownOptions = (state) => getPaymentSourcesAsArray(state).map((paymentSource) => ({
    key: paymentSource.name,
    text: paymentSource.name,
    value: paymentSource.paymentSourceID
}));

export {
    getPaymentSourcesAsArray,
    getPaymentSourceDropdownOptions
}