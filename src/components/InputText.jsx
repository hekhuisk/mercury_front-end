import React from 'react';
import { InputText as PrimeReactInputText } from 'primereact/inputtext';

const InputText = (props) => {
    const {
        children,
        ...otherProps
    } = props;

    return (
        <PrimeReactInputText {...otherProps}>{children}</PrimeReactInputText>
    );
};

export default InputText;
