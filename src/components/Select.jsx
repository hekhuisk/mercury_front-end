import React from 'react';
import { Dropdown } from 'primereact/dropdown';

const Select = (props) => {
    const {
        children,
        ...otherProps
    } = props;

    return (
        <Dropdown {...otherProps}>{children}</Dropdown>
    );
}

export default Select;