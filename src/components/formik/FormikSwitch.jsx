import React from 'react';
import Switch from '../Switch';
import { formikWrapper } from './FormikWrapper';

const FormikSwitch = (props) => {
    const {
        children,
        field,
        form,
        ...otherProps
    } = props;

    return (
        <Switch
            checked={field.value}
            {...field}
            {...otherProps}
        >
            {children}
        </Switch>
    );
}

export default formikWrapper(FormikSwitch);
