import React from 'react'
import {Modal} from 'semantic-ui-react'

import {
    Button,
    Dropdown,
    Form,
    Input,
    Checkbox,
    Radio,
} from 'formik-semantic-ui';
import {useSelector} from "react-redux";
import {paymentSourceSelectors} from "../../redux/paymentSource";
import {categorySelectors} from "../../redux/category";

const SaveExpenseModal = (props) => {
    const {
        open,
        onClose,
        onSave,
        expenseID
    } = props;

    const expenseCategoryOptions = useSelector(categorySelectors.getExpenseCategoriesDropdownOptions);
    const paymentSourceOptions = useSelector(paymentSourceSelectors.getPaymentSourceDropdownOptions);

    return (
        <Modal
            onClose={onClose}
            open={open}
        >
            <Modal.Header>
                {expenseID > 0 ? 'Edit Expense' : 'Add Expense'}
            </Modal.Header>
            <Modal.Content>
                <Form
                    initialValues={{
                        paymentSourceID: '',
                        category: '',
                        amount: '',
                        currency: 'USD',
                        majorPurchase: false,
                        description: '',
                        expenseDate: ''
                    }}
                    onSubmit={onSave}
                >
                    <Input label='Amount' name='amount' />
                    <Input label='Description' name='description' />
                    <Input label='Date' name='expenseDate' />
                    <Dropdown label='Category' name='category' options={expenseCategoryOptions} />
                    <Dropdown label='Payment Source' name='paymentSourceID' options={paymentSourceOptions} />
                    <Checkbox label='Major Purchase' name='majorPurchase' />
                    <Button
                        color='black'
                        onClick={onClose}
                    >
                        Cancel
                    </Button>
                    <Button.Submit>
                        {expenseID > 0 ? 'Save' : 'Add'}
                    </Button.Submit>
                </Form>
            </Modal.Content>
        </Modal>
    )
}

export default SaveExpenseModal