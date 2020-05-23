import React from 'react';
import { ErrorMessage, Field } from 'formik';

export const formikWrapper = (Component) => {
    class FormikWrappedComponent extends React.Component {
        render() {
            const {
                field,
                form,
                name,
                ...props
            } = this.props;

            return (
                <>
                    <Field
                        name={name}
                        component={Component}
                        {...props}
                    />
                    <ErrorMessage
                        name={name}
                        component="div"
                    />
                </>
            );
        }
    }

    FormikWrappedComponent.displayName = `FormikWrappedComponent(${Component.displayName || Component.name})`;

    return FormikWrappedComponent;
};
