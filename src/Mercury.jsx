import React from 'react';
import { Route, Switch } from 'react-router-dom'

import PaymentSources from "./views/paymentSource/PaymentSources";
import Expenses from "./views/expense/Expenses";
import NavBar from "./views/NavBar";
import Categories from "./views/category/Categories";
import Income from "./views/income/Income";
import Overview from "./views/overview/Overview";
import {useDispatch} from "react-redux";
import {categoryActions} from "./redux/category";
import {paymentSourceActions} from "./redux/paymentSource";

const Mercury = () => {
    const dispatch = useDispatch();
    dispatch(categoryActions.fetchCategories());
    dispatch(paymentSourceActions.fetchPaymentSources());

    return (
        <div style={{overflow: 'auto'}}>
            <NavBar />

            <Switch>
                <Route exact path="/overview" component={Overview} />
                <Route exact path="/expenses" component={Expenses} />
                <Route exact path="/income" component={Income} />
                <Route exact path="/categories" component={Categories} />
                <Route exact path="/payment-sources" component={PaymentSources} />
            </Switch>
        </div>
    );
};

export default Mercury;
