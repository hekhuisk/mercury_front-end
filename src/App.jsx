import React from 'react';

import 'primereact/resources/themes/rhea/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import {TabView,TabPanel} from 'primereact/tabview';


import OverallOverviewTable from "./views/OverallOverviewTable";
import Expense from "./views/expense/semantic_based/Expense";
import IncomeOverviewTable from "./views/IncomeOverviewTable";

function App() {

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
      </TabView>
  );
}

export default App;
