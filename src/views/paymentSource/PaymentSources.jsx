import React from "react";
import PaymentSourceTable from "./table/PaymentSourceTable";
import Button from '@material-ui/core/Button';
import * as paymentSourceAPI from "../../api/PaymentSourceAPI";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import Toolbar from "../../components/table/TableToolbar";
import SavePaymentSourceDialog from "./SavePaymentSourceDialog";

const PaymentSources = () => {
    // Save dialog state
    const [open, setOpen] = React.useState(false);
    const [paymentSourceID, setPaymentSourceID] = React.useState(0);

    const [paymentSources, setPaymentSources] = React.useState([]);

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

    const handleAddPaymentSourceSave = (paymentSource) => {
        paymentSourceID > 0
            ? paymentSourceAPI.updatePaymentSource(paymentSource)
            : paymentSourceAPI.createPaymentSource(paymentSource);

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

    const handleDeletePaymentSource = (paymentSourceID) => {
        paymentSourceAPI.deletePaymentSource(paymentSourceID);
        handleClose();
    }

    return (
        <div>
            <Toolbar>
                <Typography style={{flex: '1 1 100%'}} variant="h6" id="tableTitle" component="div">
                    Payment Sources
                </Typography>
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<AddIcon />}
                    onClick={handleAddPaymentSource}
                >
                    Add Payment Source
                </Button>
            </Toolbar>
            <PaymentSourceTable
                handleEditPaymentSource={handleEditPaymentSource}
                handleDeletePaymentSource={handleDeletePaymentSource}
                paymentSources={paymentSources}
            />
            <SavePaymentSourceDialog
                open={open}
                onClose={handleClose}
                onSave={handleAddPaymentSourceSave}
                paymentSourceID={paymentSourceID}
            />
        </div>
    );
};

export default PaymentSources;