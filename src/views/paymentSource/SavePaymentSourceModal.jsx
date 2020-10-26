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

const SavePaymentSourceModal = (props) => {
    const {
        open,
        onClose,
        onSave,
        paymentSourceID
    } = props;

    return (
        <Modal
            onClose={onClose}
            open={open}
        >
            <Modal.Header>
                {paymentSourceID > 0 ? 'Edit Payment Source' : 'Add Payment Source'}
            </Modal.Header>
            <Modal.Content>
                <Form
                    initialValues={{
                        name: '',
                        website: ''
                    }}
                    onSubmit={onSave}
                >
                    <Input label='Name' name='name' />
                    <Input label='Website' name='website' />
                    <Button
                        color='black'
                        onClick={onClose}
                    >
                        Cancel
                    </Button>
                    <Button.Submit>
                        {paymentSourceID > 0 ? 'Save' : 'Add'}
                    </Button.Submit>
                </Form>
            </Modal.Content>
        </Modal>
    )
}

export default SavePaymentSourceModal