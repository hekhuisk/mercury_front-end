import React from 'react';
import { Route, Switch } from 'react-router-dom'

import PaymentSources from "./views/paymentSource/PaymentSources";
import Expenses from "./views/expense/Expenses";
import APITest from "./views/APITest";
import NavBar from "./views/NavBar";
import Categories from "./views/category/Categories";
import Income from "./views/income/Income";

const Mercury = () => {
    return (
        <div>
            <NavBar />

            <Switch>
                <Route exact path="/overview" render={() => (<div>Overview</div>)} />
                <Route exact path="/expenses" component={Expenses} />
                <Route exact path="/income" component={Income} />
                <Route exact path="/categories" component={Categories} />
                <Route exact path="/payment-sources" component={PaymentSources} />
                <Route exact path="/api-test" component={APITest} />
            </Switch>
        </div>
    );
};

export default Mercury;
