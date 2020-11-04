import React from "react";

const MoneyDisplay = (props) => {
    const {
        amount,
        currency
    } = props;

    const moneyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency
    })

    return (
        <span>{moneyFormatter.format(amount)}</span>
    );
};

export default MoneyDisplay;