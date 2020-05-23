import React from 'react';
import { InputNumber as PrimeReactInputNumber } from 'primereact/inputnumber';

const InputNumber = (props) => {
    const {
        children,
        ...otherProps
    } = props;

    return (
        <PrimeReactInputNumber {...otherProps}>{children}</PrimeReactInputNumber>
    );
};

export default InputNumber;