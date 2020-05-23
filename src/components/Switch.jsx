import React from 'react';
import { InputSwitch } from 'primereact/inputswitch';

const Switch = (props) => {
    const {
        children,
        ...otherProps
    } = props;

    return (
        <InputSwitch {...otherProps}>{children}</InputSwitch>
    );
}

export default Switch;