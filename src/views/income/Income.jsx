import React from "react";
import * as incomeAPI from "../../api/IncomeAPI";
import IncomeTable from "./IncomeTable";
import SaveIncomeModal from "./SaveIncomeModal";
import { Button, Header, Icon } from "semantic-ui-react";
import {useSelector} from "react-redux";
import {userSelectors} from "../../redux/user";

const Income = () => {
    // Save income modal state
    const [open, setOpen] = React.useState(false);
    const [incomeID, setIncomeID] = React.useState(0);

    const userID = useSelector(userSelectors.getUserID);

    const [incomes, setIncomes] = React.useState([]);

    const fetchIncomes = async () => {
        setIncomes(await incomeAPI.getAllIncomes());
    };

    React.useEffect(() => {
        fetchIncomes();
    }, []);

    const handleClose = () => {
        setOpen(false);
        fetchIncomes();
    };

    const handleAddIncomeSave = (income) => {
        const categoryIDs = JSON.parse(income.category);

        income = {
            ...income,
            ...categoryIDs,
            amount: {
                amount: income.amount,
                currency: income.currency
            },
            userID
        }

        delete income.category;
        delete income.currency;

        console.log(income);

        incomeID > 0
            ? incomeAPI.updateIncome(income)
            : incomeAPI.createIncome(income);

        handleClose();
    };

    const handleAddIncome = () => {
        setIncomeID(0);
        setOpen(true);
    };

    const handleEditIncome = (incomeID) => {
        setIncomeID(incomeID);
        setOpen(true);
    };

    const handleDeleteIncome = (incomeID) => {
        //incomeAPI.deleteIncome(incomeID);
        handleClose();
    }

    return (
        <div>
            <Header>
                Income
            </Header>
            <Button
                icon
                labelPosition='left'
                onClick={handleAddIncome}
            >
                <Icon name='add' />
                Add Income
            </Button>
            <IncomeTable
                handleEditIncome={handleEditIncome}
                handleDeleteIncome={handleDeleteIncome}
                incomes={incomes}
            />
            <SaveIncomeModal
                open={open}
                onClose={handleClose}
                onSave={handleAddIncomeSave}
                incomeID={incomeID}
            />
        </div>
    );
};

export default Income;