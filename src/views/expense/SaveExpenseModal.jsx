import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const SaveExpenseModal = (props) => {
    const {
        open,
        onClose,
        onSave,
        expenseID
    } = props;

    return (
        <Modal
            onClose={onClose}
            open={open}
        >
            <Modal.Header>
                {expenseID > 0 ? 'Edit Expense' : 'Create Expense'}
            </Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Header>Default Profile Image</Header>
                    <p>
                        We've found the following gravatar image associated with your e-mail
                        address.
                    </p>
                    <p>Is it okay to use this photo?</p>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button color='black' onClick={onClose}>
                    Cancel
                </Button>
                <Button
                    content={expenseID > 0 ? 'Save' : 'Create'}
                    onClick={onSave}
                    positive
                />
            </Modal.Actions>
        </Modal>
    )
}

export default SaveExpenseModal