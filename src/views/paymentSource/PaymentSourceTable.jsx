import React from "react";
import {Button, Icon, Table} from 'semantic-ui-react'
import URLLink from "../URLLink";

const PaymentSourceTable = (props) => {
    const {
        paymentSources,
        handleEditPaymentSource,
        handleDeletePaymentSource
    } = props;

    return (
        <Table striped>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Website</Table.HeaderCell>
                    <Table.HeaderCell />
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {paymentSources && paymentSources.map((paymentSource) => (
                    <Table.Row key={paymentSource.paymentSourceID}>
                        <Table.Cell>{paymentSource.name}</Table.Cell>
                        <Table.Cell>
                            <URLLink url={paymentSource.website}>
                                {paymentSource.website}
                            </URLLink>
                        </Table.Cell>
                        <Table.Cell>
                            <Button
                                icon
                                onClick={() => handleEditPaymentSource(paymentSource.paymentSourceID)}
                            >
                                <Icon name='edit' />
                            </Button>
                            <Button
                                icon
                                onClick={() => handleDeletePaymentSource(paymentSource.paymentSourceID)}
                            >
                                <Icon name='trash alternate' />
                            </Button>
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    );
};

export default PaymentSourceTable;