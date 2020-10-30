import React from "react";
import PaymentSourceTable from "./PaymentSourceTable";
import { paymentSourceActions, paymentSourceSelectors } from '../../redux/paymentSource';
import * as paymentSourceAPI from "../../api/PaymentSourceAPI";

import SavePaymentSourceModal from "./SavePaymentSourceModal";

import { Button, Header, Icon } from 'semantic-ui-react'
import {useDispatch, useSelector} from "react-redux";
import {userSelectors} from "../../redux/user";

const PaymentSources = () => {
    // Save payment source modal state
    const [open, setOpen] = React.useState(false);
    const [paymentSourceID, setPaymentSourceID] = React.useState(0);

    const [doFetch, setDoFetch] = React.useState(true);

    const dispatch = useDispatch();

    const paymentSources = useSelector(paymentSourceSelectors.getPaymentSourcesAsArray);
    const userID = useSelector(userSelectors.getUserID);

    React.useEffect(() => {
        if (doFetch) {
            setDoFetch(false);
            dispatch(paymentSourceActions.fetchPaymentSources());
        }
    }, [doFetch]);

    const handleClose = (doFetch = false) => {
        setOpen(false);
        setDoFetch(doFetch);
    };

    const handleSavePaymentSource = async (paymentSource) => {
        paymentSource.userID = userID;
        paymentSourceID > 0
            ? await paymentSourceAPI.updatePaymentSource(paymentSource)
            : await paymentSourceAPI.createPaymentSource(paymentSource);

        handleClose(true);
    };

    const handleAddPaymentSource = () => {
        setPaymentSourceID(0);
        setOpen(true);
    };

    const handleEditPaymentSource = (paymentSourceID) => {
        setPaymentSourceID(paymentSourceID);
        setOpen(true);
    };

    const handleDeletePaymentSource = async (paymentSourceID) => {
        await paymentSourceAPI.deletePaymentSource(paymentSourceID);
        handleClose();
    }

    return (
        <div>
            <Header>
                Payment Sources
            </Header>
            <Button
                icon
                labelPosition='left'
                onClick={handleAddPaymentSource}
            >
                <Icon name='add' />
                Add Payment Source
            </Button>
            <PaymentSourceTable
                handleEditPaymentSource={handleEditPaymentSource}
                handleDeletePaymentSource={handleDeletePaymentSource}
                paymentSources={paymentSources}
            />
            <SavePaymentSourceModal
                open={open}
                onClose={handleClose}
                onSave={handleSavePaymentSource}
                paymentSourceID={paymentSourceID}
            />
        </div>
    );
};

export default PaymentSources;