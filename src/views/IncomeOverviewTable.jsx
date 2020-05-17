import React from "react";
import OverviewTable from "../components/OverviewTable";

const createMonthlyTotals = () => ({
    jan: 0,
    feb: 0,
    mar: 0,
    apr: 0,
    may: 0,
    jun: 0,
    jul: 0,
    aug: 0,
    sep: 0,
    oct: 0,
    nov: 0,
    dec: 0
});

export default function IncomeOverviewTable() {
    const tableData = [
        { rowName: "Salary/Wages", monthlyTotals: createMonthlyTotals() },
        { rowName: "Refunds/Reimbursements", monthlyTotals: createMonthlyTotals() },
        { rowName: "Bonuses", monthlyTotals: createMonthlyTotals() },
        { rowName: "Misc", monthlyTotals: createMonthlyTotals() }
    ];

    return (
        <OverviewTable
            tableData={tableData}
            totalsRow
        />
    );
}