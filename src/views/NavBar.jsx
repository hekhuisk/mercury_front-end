import React from "react";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import AccountCircle from '@material-ui/icons/AccountCircle';
import classNames from 'classnames';
import {Link, useLocation} from "react-router-dom";

import { Button, Icon } from 'semantic-ui-react'
import { Menu } from 'semantic-ui-react'

const NavBar = () => {
    const location = useLocation();

    return (
        <Menu
            borderless
            pointing
            secondary
        >
            <Menu.Item header>
                Mercury
            </Menu.Item>
            <Menu.Item
                active={location.pathname === '/overview'}
                as={Link}
                to="/overview"
            >
                Overview
            </Menu.Item>
            <Menu.Item
                active={location.pathname === '/expenses'}
                as={Link}
                to="/expenses"
            >
                Expenses
            </Menu.Item>
            <Menu.Item
                active={location.pathname === '/payment-sources'}
                as={Link}
                to="/payment-sources"
            >
                Payment Sources
            </Menu.Item>
            <Menu.Item
                active={location.pathname === '/api-test'}
                as={Link}
                to="/api-test"
            >
                API Test
            </Menu.Item>
            <Menu.Item position='right'>
                <Button
                    circular
                    icon
                >
                    <Icon name='user circle' />
                </Button>
            </Menu.Item>
        </Menu>
    );
}

export default NavBar;