// Major category
// Sub category
// Vendor
// Expense amount
// Pic of receipt
// Date
// Edit button
// major purchase check box?
// is recurring?
// delete

import React from 'react'
import {Table, Icon, Button, Popup} from "semantic-ui-react";

const ExpenseRow = (props) => {
    const {
        cost,
        date,
        description,
        majorCategory,
        majorPurchase,
        paymentSource,
        receipt,
        subCategory
    } = props;

    return (
        <Table.Row>
            <Table.Cell>{date}</Table.Cell>
            <Table.Cell>{description}</Table.Cell>
            <Table.Cell>{`${majorCategory} - ${subCategory}`}</Table.Cell>
            <Table.Cell textAlign="center" >
                {majorPurchase &&
                    <Icon
                        name="check"
                        fitted
                    />
                }
            </Table.Cell>
            <Table.Cell>{paymentSource}</Table.Cell>
            <Table.Cell textAlign="right">
                {receipt &&
                    <Popup
                        content="View Receipt"
                        trigger={
                            <Button
                                icon="file alternate"
                                basic
                                compact
                            />
                        }
                    />
                }
                {`$${cost}`}
            </Table.Cell>
            <Table.Cell>
                <Popup
                    content="Edit Expense"
                    trigger={
                        <Button
                            icon="pencil"
                            basic
                            compact
                        />
                    }
                />
                <Popup
                    content="Delete Expense"
                    trigger={
                        <Button
                            icon="trash alternate"
                            basic
                            compact
                        />
                    }
                />
            </Table.Cell>
        </Table.Row>
    );
}

export default ExpenseRow;