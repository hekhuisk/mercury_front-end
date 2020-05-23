import React from 'react'

import {Dialog} from 'primereact/dialog';


import { Formik, Form,  } from 'formik';
import {Switch } from "../../components/formik";

const categoryOptions = [
    { value: '1', label: 'Home - Lawn/Garden' },
    { value: '2', label: 'Home - Mortgage' },
];

const paymentSourceOptions = [
    { value: 'cash', label: 'Cash' },
];

const ExpenseForm = (props) => {
    const {

    } = props;

    return (
        <Dialog visible={true}>
            <Formik initialValues={{}} onSubmit={{}}>

                <Form>
                    {/*<FormikInputText name="test"/>*/}
                    <Switch name="kyle"/>
                </Form>

            </Formik>
        </Dialog>
    );
}

export default ExpenseForm