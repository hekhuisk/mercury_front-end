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

const NavBar = () => {
    const [ selectedTabValue, setSelectedTabValue ] = React.useState(0);

    const handleTabClick = (event, newTabValue) => {
        setSelectedTabValue(newTabValue);
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" noWrap>
                        Mercury
                    </Typography>
                    <Tabs value={selectedTabValue} onChange={handleTabClick} aria-label="simple tabs example">
                        <Tab label="Overview" />
                        <Tab label="Expenses"/>
                        <Tab label="Payment Sources" />
                    </Tabs>
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
            <TabPanel value={selectedTabValue} index={1}>
                <Expenses />
            </TabPanel>
            <TabPanel value={selectedTabValue} index={2}>
                <PaymentSources />
            </TabPanel>
        </>
    );
}

export default NavBar;