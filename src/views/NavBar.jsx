import React from 'react';
import { Link, useLocation } from 'react-router-dom';

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
                active={location.pathname === '/income'}
                as={Link}
                to="/income"
            >
                Income
            </Menu.Item>
            <Menu.Item
                active={location.pathname === '/categories'}
                as={Link}
                to="/categories"
            >
                Categories
            </Menu.Item>
            <Menu.Item
                active={location.pathname === '/payment-sources'}
                as={Link}
                to="/payment-sources"
            >
                Payment Sources
            </Menu.Item>
        </Menu>
    );
}

export default NavBar;