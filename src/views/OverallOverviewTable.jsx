import React from "react";
import OverviewRow from "../components/OverviewRow";
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

export default function OverallOverviewTable() {
    return (
        <OverviewTable>
            <OverviewRow
                monthlyTotals={createMonthlyTotals()}
                rowName="Total Income"
            />
            <OverviewRow
                monthlyTotals={createMonthlyTotals()}
                rowName="Total Expenses"
            />
            <OverviewRow
                monthlyTotals={createMonthlyTotals()}
                rowName="Budget"
            />
            <OverviewRow
                monthlyTotals={createMonthlyTotals()}
                rowName="Budget Over / Under"
            />
            <OverviewRow
                monthlyTotals={createMonthlyTotals()}
                rowName="Est Savings (Income - Budget)"
            />
            <OverviewRow
                monthlyTotals={createMonthlyTotals()}
                rowName="Actual Savings (Income - Expenses)"
            />
        </OverviewTable>
    );
}