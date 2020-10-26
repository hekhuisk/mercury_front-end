import React from "react";
import PaymentSourceTable from "./PaymentSourceTable";
import * as paymentSourceAPI from "../../api/PaymentSourceAPI";

import SavePaymentSourceModal from "./SavePaymentSourceModal";

import { Button, Header, Icon } from 'semantic-ui-react'
import {useSelector} from "react-redux";
import {userSelectors} from "../../redux/user";

const PaymentSources = () => {
    // Save payment source modal state
    const [open, setOpen] = React.useState(false);
    const [paymentSourceID, setPaymentSourceID] = React.useState(0);

    const [paymentSources, setPaymentSources] = React.useState([]);

    const userID = useSelector(userSelectors.getUserID);

    const fetchPaymentSources = async () => {
        setPaymentSources(await paymentSourceAPI.getAllPaymentSources());
    };

    React.useEffect(() => {
        fetchPaymentSources();
    }, []);

    const handleClose = () => {
        setOpen(false);
        fetchPaymentSources();
    };

    const handleSavePaymentSource = async (paymentSource) => {
        paymentSource.userID = userID;
        paymentSourceID > 0
            ? await paymentSourceAPI.updatePaymentSource(paymentSource)
            : await paymentSourceAPI.createPaymentSource(paymentSource);

        handleClose();
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