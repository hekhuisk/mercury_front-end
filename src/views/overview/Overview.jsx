import React from "react";
import * as overviewAPI from "../../api/OverviewAPI";
import OverviewTable from "./OverviewTable";
import {categorySelectors} from "../../redux/category";
import MoneyCell from "../MoneyCell";

const Overview = () => {
    const [overview, setOverview] = React.useState();
    const [year, setYear] = React.useState(2020)

    const handleGetOverview = async (year) => {
        setOverview(await overviewAPI.getOverview(year));
    }

    const handleYearChange = (year) => {
        setYear(year);
        handleGetOverview(year);
    }

    React.useEffect(() => {
        handleGetOverview(year);
    }, []);

    return (
        <div style={{margin: 'auto', width: `${300 + (130 * 13)}px`, overflowX: 'auto'}}>
            <table style={{width: '100%'}} >
                <thead>
                    <tr>
                        <th width='300px' className='no-hover'>
                            <button onClick={() => handleYearChange(year - 1)}>
                                {'<'}
                            </button>
                            {`Year: ${year}`}
                            <button onClick={() => handleYearChange(year + 1)}>
                                {'>'}
                            </button>
                        </th>
                        <th className='month-label'>JAN</th>
                        <th className='month-label'>FEB</th>
                        <th className='month-label'>MAR</th>
                        <th className='month-label'>APR</th>
                        <th className='month-label'>MAY</th>
                        <th className='month-label'>JUN</th>
                        <th className='month-label'>JUL</th>
                        <th className='month-label'>AUG</th>
                        <th className='month-label'>SEP</th>
                        <th className='month-label'>OCT</th>
                        <th className='month-label'>NOV</th>
                        <th className='month-label'>DEC</th>
                        <th className='month-label'></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='no-hover'>
                        <th
                            className='row-label overview-row section-label'
                            colSpan={14}
                        >
                            Overview
                        </th>
                    </tr>
                    <tr>
                        <th className='row-label overview-row-label'>Total Income</th>
                        <MoneyCell>{overview && overview.incomeTotalMonthlyTotals.JANUARY}</MoneyCell>
                        <MoneyCell>{overview && overview.incomeTotalMonthlyTotals.FEBRUARY}</MoneyCell>
                        <MoneyCell>{overview && overview.incomeTotalMonthlyTotals.MARCH}</MoneyCell>
                        <MoneyCell>{overview && overview.incomeTotalMonthlyTotals.APRIL}</MoneyCell>
                        <MoneyCell>{overview && overview.incomeTotalMonthlyTotals.MAY}</MoneyCell>
                        <MoneyCell>{overview && overview.incomeTotalMonthlyTotals.JUNE}</MoneyCell>
                        <MoneyCell>{overview && overview.incomeTotalMonthlyTotals.JULY}</MoneyCell>
                        <MoneyCell>{overview && overview.incomeTotalMonthlyTotals.AUGUST}</MoneyCell>
                        <MoneyCell>{overview && overview.incomeTotalMonthlyTotals.SEPTEMBER}</MoneyCell>
                        <MoneyCell>{overview && overview.incomeTotalMonthlyTotals.OCTOBER}</MoneyCell>
                        <MoneyCell>{overview && overview.incomeTotalMonthlyTotals.NOVEMBER}</MoneyCell>
                        <MoneyCell>{overview && overview.incomeTotalMonthlyTotals.DECEMBER}</MoneyCell>
                        <MoneyCell>{overview && overview.incomeYearlyTotal}</MoneyCell>
                    </tr>
                    <tr>
                        <th className='row-label overview-row-label'>Total Expenses</th>
                        <MoneyCell>{overview && overview.expenseTotalMonthlyTotals.JANUARY}</MoneyCell>
                        <MoneyCell>{overview && overview.expenseTotalMonthlyTotals.FEBRUARY}</MoneyCell>
                        <MoneyCell>{overview && overview.expenseTotalMonthlyTotals.MARCH}</MoneyCell>
                        <MoneyCell>{overview && overview.expenseTotalMonthlyTotals.APRIL}</MoneyCell>
                        <MoneyCell>{overview && overview.expenseTotalMonthlyTotals.MAY}</MoneyCell>
                        <MoneyCell>{overview && overview.expenseTotalMonthlyTotals.JUNE}</MoneyCell>
                        <MoneyCell>{overview && overview.expenseTotalMonthlyTotals.JULY}</MoneyCell>
                        <MoneyCell>{overview && overview.expenseTotalMonthlyTotals.AUGUST}</MoneyCell>
                        <MoneyCell>{overview && overview.expenseTotalMonthlyTotals.SEPTEMBER}</MoneyCell>
                        <MoneyCell>{overview && overview.expenseTotalMonthlyTotals.OCTOBER}</MoneyCell>
                        <MoneyCell>{overview && overview.expenseTotalMonthlyTotals.NOVEMBER}</MoneyCell>
                        <MoneyCell>{overview && overview.expenseTotalMonthlyTotals.DECEMBER}</MoneyCell>
                        <MoneyCell>{overview && overview.expenseYearlyTotal}</MoneyCell>
                    </tr>
                    <tr>
                        <th className='row-label overview-row-label'>Money Saved</th>
                        <MoneyCell>{overview && (overview.incomeTotalMonthlyTotals.JANUARY - overview.expenseTotalMonthlyTotals.JANUARY)}</MoneyCell>
                        <MoneyCell>{overview && (overview.incomeTotalMonthlyTotals.FEBRUARY - overview.expenseTotalMonthlyTotals.FEBRUARY)}</MoneyCell>
                        <MoneyCell>{overview && (overview.incomeTotalMonthlyTotals.MARCH - overview.expenseTotalMonthlyTotals.MARCH)}</MoneyCell>
                        <MoneyCell>{overview && (overview.incomeTotalMonthlyTotals.APRIL - overview.expenseTotalMonthlyTotals.APRIL)}</MoneyCell>
                        <MoneyCell>{overview && (overview.incomeTotalMonthlyTotals.MAY - overview.expenseTotalMonthlyTotals.MAY)}</MoneyCell>
                        <MoneyCell>{overview && (overview.incomeTotalMonthlyTotals.JUNE - overview.expenseTotalMonthlyTotals.JUNE)}</MoneyCell>
                        <MoneyCell>{overview && (overview.incomeTotalMonthlyTotals.JULY - overview.expenseTotalMonthlyTotals.JULY)}</MoneyCell>
                        <MoneyCell>{overview && (overview.incomeTotalMonthlyTotals.AUGUST - overview.expenseTotalMonthlyTotals.AUGUST)}</MoneyCell>
                        <MoneyCell>{overview && (overview.incomeTotalMonthlyTotals.SEPTEMBER - overview.expenseTotalMonthlyTotals.SEPTEMBER)}</MoneyCell>
                        <MoneyCell>{overview && (overview.incomeTotalMonthlyTotals.OCTOBER - overview.expenseTotalMonthlyTotals.OCTOBER)}</MoneyCell>
                        <MoneyCell>{overview && (overview.incomeTotalMonthlyTotals.NOVEMBER - overview.expenseTotalMonthlyTotals.NOVEMBER)}</MoneyCell>
                        <MoneyCell>{overview && (overview.incomeTotalMonthlyTotals.DECEMBER - overview.expenseTotalMonthlyTotals.DECEMBER)}</MoneyCell>
                        <MoneyCell>{overview && (overview.incomeYearlyTotal - overview.expenseYearlyTotal)}</MoneyCell>
                    </tr>
                    <tr style={{height: '40px'}}/>
                    <tr className='no-hover'>
                        <th
                            colSpan={14}
                            className='row-label income-row section-label'
                        >
                            Income
                        </th>
                    </tr>
                    <OverviewTable
                        makeGetCategoryName={categorySelectors.makeGetIncomeCategoryName}
                        monthlyTotals={overview && overview.incomeMonthlyTotals}
                        totalMonthlyTotals={overview && overview.incomeTotalMonthlyTotals}
                        yearlyTotal={overview && overview.incomeYearlyTotal}
                    />
                    <tr style={{height: '40px'}}/>
                    <tr className='no-hover'>
                        <th
                            colSpan={14}
                            className='row-label expense-row section-label'
                        >
                            Expenses
                        </th>
                    </tr>
                    <OverviewTable
                        makeGetCategoryName={categorySelectors.makeGetExpenseCategoryName}
                        monthlyTotals={overview && overview.expenseMonthlyTotals}
                        totalMonthlyTotals={overview && overview.expenseTotalMonthlyTotals}
                        yearlyTotal={overview && overview.expenseYearlyTotal}
                    />
                </tbody>
            </table>
        </div>
    );
};

export default Overview;