import React from 'react'
import { Modal } from 'semantic-ui-react'

import {
    Button,
    Dropdown,
    Form,
    Input,
    Checkbox,
    Radio,
} from 'formik-semantic-ui';

import {
    Dropdown as SemanticDropdown
} from 'semantic-ui-react';
import {useSelector} from "react-redux";
import {categorySelectors} from "../../redux/category";

const categoryTypeOptions = [
    { key: 'e', text: 'Expense', value: 'EXPENSE'},
    { key: 'i', text: 'Income', value: 'INCOME'}
];

const SaveSubCategoryModal = (props) => {
    const {
        open,
        onClose,
        onSave,
        subCategoryID
    } = props;

    const [categoryType, setCategoryType] = React.useState('EXPENSE');

    const expenseMainCategoryOptions = useSelector(categorySelectors.getExpenseMainCategoriesDropdownOptions);
    const incomeMainCategoryOptions = useSelector(categorySelectors.getIncomeMainCategoriesDropdownOptions);

    const mainCategoryOptions = categoryType === 'EXPENSE'
        ? expenseMainCategoryOptions
        : incomeMainCategoryOptions;

    return (
        <Modal
            onClose={onClose}
            open={open}
        >
            <Modal.Header>
                {subCategoryID > 0 ? 'Edit Main Category' : 'Add Main Category'}
            </Modal.Header>
            <Modal.Content>
                <Form
                    initialValues={{
                        name: '',
                        mainCategoryID: ''
                    }}
                    onSubmit={onSave}
                >
                    <Input label='Name' name='name' />
                    <SemanticDropdown
                        label='Category Type'
                        options={categoryTypeOptions}
                        onChange={(e, { value }) => setCategoryType(value)}
                        value={categoryType}
                    />
                    <Dropdown label='Main Category' name='mainCategoryID' options={mainCategoryOptions} />
                    <Button
                        color='black'
                        onClick={onClose}
                    >
                        Cancel
                    </Button>
                    <Button.Submit>
                        {subCategoryID > 0 ? 'Save' : 'Add'}
                    </Button.Submit>
                </Form>
            </Modal.Content>
        </Modal>
    )
}

export default SaveSubCategoryModal