import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const SaveIncomeModal = (props) => {
    const {
        open,
        onClose,
        onSave,
        incomeID
    } = props;

    return (
        <Modal
            onClose={onClose}
            open={open}
        >
            <Modal.Header>
                {incomeID > 0 ? 'Edit Income' : 'Add Income'}
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
                <Button
                    color='black'
                    onClick={onClose}
                >
                    Cancel
                </Button>
                <Button
                    content={incomeID > 0 ? 'Save' : 'Add'}
                    onClick={onSave}
                    positive
                />
            </Modal.Actions>
        </Modal>
    )
}

export default SaveIncomeModal