import React from 'react';
import { Route, Switch } from 'react-router-dom'
import PaymentSources from "./views/paymentSource/PaymentSources";
import Expenses from "./views/expense/Expenses";
import APITest from "./views/APITest";
import NavBar from "./views/NavBar";



const App = () => {
    return (
        <div>
            <NavBar />

            <Switch>
                <Route exact path="/overview" render={() => (<div>Overview</div>)} />
                <Route exact path="/expenses" component={Expenses} />
                <Route exact path="/payment-sources" component={PaymentSources} />
                <Route exact path="/api-test" component={APITest} />
            </Switch>
        </div>
    );
};

export default App;
