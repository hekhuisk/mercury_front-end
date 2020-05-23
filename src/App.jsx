import React from 'react';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import {TabView,TabPanel} from 'primereact/tabview';


// import 'semantic-ui-css/semantic.min.css';
// import {Button, Tab} from "semantic-ui-react";
import OverallOverviewTable from "./views/OverallOverviewTable";
import Expense from "./views/expense/Expense";
import IncomeOverviewTable from "./views/IncomeOverviewTable";


function App() {
  // const panes = [
  //   { menuItem: 'Overview', render: () => <Tab.Pane><OverallOverviewTable /></Tab.Pane> },
  //   { menuItem: 'Expenses', render: () => <Tab.Pane><Expense /></Tab.Pane> },
  //   { menuItem: 'Income', render: () => <Tab.Pane><IncomeOverviewTable /></Tab.Pane> },
  //   { menuItem: 'Recurring Expenses', render: () => <Tab.Pane><Button content='Add Recurring Expense' icon='add' labelPosition='right' /></Tab.Pane> },
  //   { menuItem: 'Payment Sources', render: () => <Tab.Pane><Button content='Add Payment Source' icon='add' labelPosition='right' /></Tab.Pane> }
  // ];

  return (
      <TabView>
          <TabPanel header="Overview">
              <OverallOverviewTable />
          </TabPanel>
          <TabPanel header="Expenses">
              <Expense />
          </TabPanel>
          <TabPanel header="Income">
              <IncomeOverviewTable />
          </TabPanel>
          <TabPanel header="Recurring Expenses">
              Recurring Expenses
          </TabPanel>
          <TabPanel header="Payment Sources">
              Payment Sources
          </TabPanel>
      </TabView>
  );
}

export default App;
