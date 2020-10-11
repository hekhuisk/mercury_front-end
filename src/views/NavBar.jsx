import React from "react";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AccountCircle from '@material-ui/icons/AccountCircle';
import TabPanel from "../components/tab/TabPanel";
import Expenses from "./expense/Expenses";
import PaymentSources from "./paymentSource/PaymentSources";
import APITest from "./APITest";
import {Link} from "react-router-dom";

const NavBar = () => {

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" noWrap>
                        Mercury
                    </Typography>
                    <Link to="/overview">Overview</Link>
                    <Link to="/expenses">Expenses</Link>
                    <Link to="/payment-sources">Payment Sources</Link>
                    <Link to="/api-test">API Test</Link>
                    <div style={{
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'row-reverse'
                    }}>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="primary-search-account-menu"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <AccountCircle/>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default NavBar;