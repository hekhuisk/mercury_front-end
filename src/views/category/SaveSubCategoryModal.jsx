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

const mainCategoryOptions = [
    { key: 'home', text: 'Home', value: 1},
    { key: 'insurance', text: 'Insurance', value: 2}
];

const SaveSubCategoryModal = (props) => {
    const {
        open,
        onClose,
        onSave,
        subCategoryID
    } = props;

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