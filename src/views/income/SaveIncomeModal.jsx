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
import {categorySelectors} from "../../redux/category";

const SaveIncomeModal = (props) => {
    const {
        open,
        onClose,
        onSave,
        incomeID
    } = props;

    const incomeCategoryOptions = useSelector(categorySelectors.getIncomeCategoriesDropdownOptions);

    return (
        <Modal
            onClose={onClose}
            open={open}
        >
            <Modal.Header>
                {incomeID > 0 ? 'Edit Income' : 'Add Income'}
            </Modal.Header>
            <Modal.Content>
                <Form
                    initialValues={{
                        category: '',
                        amount: '',
                        currency: 'USD',
                        description: '',
                        incomeDate: ''
                    }}
                    onSubmit={onSave}
                >
                    <Input label='Amount' name='amount' />
                    <Input label='Description' name='description' />
                    <Input label='Date' name='incomeDate' />
                    <Dropdown label='Category' name='category' options={incomeCategoryOptions} />
                    <Button
                        color='black'
                        onClick={onClose}
                    >
                        Cancel
                    </Button>
                    <Button.Submit>
                        {incomeID > 0 ? 'Save' : 'Add'}
                    </Button.Submit>
                </Form>
            </Modal.Content>
        </Modal>
    )
}

export default SaveIncomeModal