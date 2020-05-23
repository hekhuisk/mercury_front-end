import React from 'react'

import {Dialog} from 'primereact/dialog';


import { Formik, Form } from 'formik';
import { Calendar, InputNumber, InputText, Select, Switch } from '../../components/formik';

const categoryOptions = [
    { value: '1', label: 'Home - Lawn/Garden' },
    { value: '2', label: 'Home - Mortgage' },
];

const paymentSourceOptions = [
    { value: 'cash', label: 'Cash' },
];

const initialValues = {
    cost: '1'
};

const onSubmit = {
};

const ExpenseForm = (props) => {
    const {

    } = props;

    return (
        <Dialog visible={true} maximizable style={{width: '50vw', height: '50vw'}}>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form>
                    <div className="p-grid">
                        <div className="p-col-6" text-align="right" >
                            <label>Expense Date</label>
                        </div>
                        <div className="p-col-6">
                            <Calendar
                                name="expenseDate"
                                showButtonBar
                                // showIcon
                                placeholder="Expense Date"
                            />
                        </div>
                        <div className="p-col-6" text-align="right">
                            <label>Description</label>
                        </div>
                        <div className="p-col-6">
                            <InputText
                                name="description"
                                placeholder="Description"
                            />
                        </div>
                        <div className="p-col-6" text-align="right">
                            <label>Category</label>
                        </div>
                        <div className="p-col-6">
                            <Select
                                name="category"
                                options={categoryOptions}
                            />
                        </div>
                        <div className="p-col-6" text-align="right">
                            <label>Major Purchase</label>
                        </div>
                        <div className="p-col-6" >
                            <Switch name="majorPurchase"/>
                        </div>
                        <div className="p-col-6" text-align="right">
                            <label>Payment Source</label>
                        </div>
                        <div className="p-col-6" >
                            <Select
                                name="paymentSource"
                                options={paymentSourceOptions}
                            />
                        </div>
                        <div className="p-col-6" text-align="right">
                            <span>Cost</span>
                        </div>
                        <div className="p-col-6">
                            <InputNumber
                                name="cost"
                                mode="currency"
                                currency="USD"
                                locale="en-US"
                                placeholder="Cost"
                            />
                        </div>
                    </div>
                </Form>
            </Formik>
        </Dialog>
    );
}

export default ExpenseForm