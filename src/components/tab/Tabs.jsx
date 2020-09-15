import React from "react";
import {Tabs as MaterialUITabs} from '@material-ui/core/Tabs';

const Tabs = ({children}) => {
    const [ selectedTabValue, setSelectedTabValue ] = React.useState(0);

    const handleTabClick = (event, newTabValue) => {
        setSelectedTabValue(newTabValue);
    };

    return (
        <MaterialUITabs
            value={selectedTabValue}
            onChange={handleTabClick}
        >
            {children}
        </MaterialUITabs>
    );
};