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

const categoryTypeOptions = [
    { key: 'e', text: 'Expense', value: 'EXPENSE'},
    { key: 'i', text: 'Income', value: 'INCOME'}
];

const SaveMainCategoryModal = (props) => {
    const {
        open,
        onClose,
        onSave,
        mainCategoryID
    } = props;

    return (
        <Modal
            onClose={onClose}
            open={open}
        >
            <Modal.Header>
                {mainCategoryID > 0 ? 'Edit Main Category' : 'Add Main Category'}
            </Modal.Header>
            <Modal.Content>
                <Form
                    initialValues={{
                        name: '',
                        categoryType: ''
                    }}
                    onSubmit={onSave}
                >
                    <Input label='Name' name='name' />
                    <Dropdown label='Category Type' name='categoryType' options={categoryTypeOptions} />
                    <Button
                        color='black'
                        onClick={onClose}
                    >
                        Cancel
                    </Button>
                    <Button.Submit>
                        {mainCategoryID > 0 ? 'Save' : 'Add'}
                    </Button.Submit>
                </Form>
            </Modal.Content>
        </Modal>
    )
}

export default SaveMainCategoryModal