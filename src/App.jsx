import React from 'react';

import 'semantic-ui-css/semantic.min.css';
import {Tab} from "semantic-ui-react";
import OverallOverviewTable from "./views/OverallOverviewTable";
import Expense from "./views/expense/Expense";
import IncomeOverviewTable from "./views/IncomeOverviewTable";

function App() {
  const panes = [
    { menuItem: 'Overview', render: () => <Tab.Pane><OverallOverviewTable /></Tab.Pane> },
    { menuItem: 'Expenses', render: () => <Tab.Pane><Expense /></Tab.Pane> },
    { menuItem: 'Income', render: () => <Tab.Pane><IncomeOverviewTable /></Tab.Pane> }
  ]

  return (
      <Tab panes={panes}/>
  );
}

export default App;
