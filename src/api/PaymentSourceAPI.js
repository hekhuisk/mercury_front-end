let internalPaymentSourceID = 1;

function createPaymentSourceData(paymentSourceID, name, website) {
    return { paymentSourceID, name, website };
}

const paymentSourceData = new Map();
paymentSourceData.set(internalPaymentSourceID, createPaymentSourceData(internalPaymentSourceID++, 'Chase Visa', 'www.chase.come'));
paymentSourceData.set(internalPaymentSourceID, createPaymentSourceData(internalPaymentSourceID++, 'Checking', 'www.some-bank.come'));
paymentSourceData.set(internalPaymentSourceID, createPaymentSourceData(internalPaymentSourceID++, 'Cash', null));

const createPaymentSource = (paymentSource) => {
    const {
        name,
        website
    } = paymentSource;

    paymentSourceData.set(internalPaymentSourceID, createPaymentSourceData(internalPaymentSourceID++, name, website));
};

const deletePaymentSource = (paymentSourceID) => {
    paymentSourceData.delete(paymentSourceID);
}

const editPaymentSource = (paymentSource) => {
    const {
        name,
        paymentSourceID,
        website
    } = paymentSource;

    paymentSourceData.set(paymentSourceID, createPaymentSourceData(paymentSourceID, name, website));
};

const getPaymentSource = (paymentSourceID) => {
    return paymentSourceData.get(paymentSourceID);
};

const getPaymentSources = () => {
    return Array.from(paymentSourceData.values());
};

export {
    createPaymentSource,
    deletePaymentSource,
    editPaymentSource,
    getPaymentSource,
    getPaymentSources
};