import React from 'react'
import { Tab } from 'semantic-ui-react'
import TableExampleCelledStriped from "./Kyle4";

const panes = [
    { menuItem: 'Overview', render: () => <Tab.Pane><TableExampleCelledStriped /></Tab.Pane> },
    { menuItem: 'Expenses', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    { menuItem: 'Income', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

const TabExampleBasic = () => <Tab panes={panes} />

export default TabExampleBasic
