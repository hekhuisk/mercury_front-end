import React from 'react';

import 'semantic-ui-css/semantic.min.css';
import {Tab} from "semantic-ui-react";
import OverallOverviewTable from "./views/OverallOverviewTable";
import ExpenseOverviewTable from "./views/expense/ExpenseOverviewTable";

function App() {
  const panes = [
    { menuItem: 'Overview', render: () => <Tab.Pane><OverallOverviewTable /></Tab.Pane> },
    { menuItem: 'Expenses', render: () => <Tab.Pane><ExpenseOverviewTable /></Tab.Pane> },
    { menuItem: 'Income', render: () => <Tab.Pane>Income</Tab.Pane> }
  ]

  return (
      <Tab panes={panes}/>
  );
}

export default App;
