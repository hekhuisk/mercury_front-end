import React from "react";
import {Table} from 'semantic-ui-react'
import MoneyDisplay from "../MoneyDisplay";
import {useSelector} from "react-redux";

const MoneyCell = (props) => (
    <td align='right' className='money-cell'><MoneyDisplay amount={props.children || 0} /></td>
);

const OverviewTable = (props) => {
    const {
        makeGetCategoryName,
        monthlyTotals,
        totalMonthlyTotals,
        yearlyTotal
    } = props;

    const getMainCategoryName = useSelector((state) => makeGetCategoryName(state, 'main'));
    const getSubCategoryName = useSelector((state) => makeGetCategoryName(state, 'sub'));

    return (
        <>
            {monthlyTotals && monthlyTotals.map((mainCategoryTotals) => {
                return (
                    <>
                        <tr className='no-hover'>
                            <th
                                align='left'
                                colSpan={14}
                            >
                                {getMainCategoryName(mainCategoryTotals.mainCategoryID)}
                            </th>
                        </tr>
                        {mainCategoryTotals.subCategoryMonthlyTotals.map((subCategoryTotals) => (
                            <tr>
                                <th align='left'>{getSubCategoryName(mainCategoryTotals.mainCategoryID, subCategoryTotals.subCategoryID)}</th>
                                <MoneyCell>{subCategoryTotals.januaryTotal}</MoneyCell>
                                <MoneyCell>{subCategoryTotals.februaryTotal}</MoneyCell>
                                <MoneyCell>{subCategoryTotals.marchTotal}</MoneyCell>
                                <MoneyCell>{subCategoryTotals.aprilTotal}</MoneyCell>
                                <MoneyCell>{subCategoryTotals.mayTotal}</MoneyCell>
                                <MoneyCell>{subCategoryTotals.juneTotal}</MoneyCell>
                                <MoneyCell>{subCategoryTotals.julyTotal}</MoneyCell>
                                <MoneyCell>{subCategoryTotals.augustTotal}</MoneyCell>
                                <MoneyCell>{subCategoryTotals.septemberTotal}</MoneyCell>
                                <MoneyCell>{subCategoryTotals.octoberTotal}</MoneyCell>
                                <MoneyCell>{subCategoryTotals.novemberTotal}</MoneyCell>
                                <MoneyCell>{subCategoryTotals.decemberTotal}</MoneyCell>
                                <MoneyCell>{subCategoryTotals.yearlyTotal}</MoneyCell>
                            </tr>
                        ))}
                        <tr>
                            <th align='left'>{`${getMainCategoryName(mainCategoryTotals.mainCategoryID)} Total`}</th>
                            <MoneyCell>{mainCategoryTotals.monthlyTotals.JANUARY}</MoneyCell>
                            <MoneyCell>{mainCategoryTotals.monthlyTotals.FEBRUARY}</MoneyCell>
                            <MoneyCell>{mainCategoryTotals.monthlyTotals.MARCH}</MoneyCell>
                            <MoneyCell>{mainCategoryTotals.monthlyTotals.APRIL}</MoneyCell>
                            <MoneyCell>{mainCategoryTotals.monthlyTotals.MAY}</MoneyCell>
                            <MoneyCell>{mainCategoryTotals.monthlyTotals.JUNE}</MoneyCell>
                            <MoneyCell>{mainCategoryTotals.monthlyTotals.JULY}</MoneyCell>
                            <MoneyCell>{mainCategoryTotals.monthlyTotals.AUGUST}</MoneyCell>
                            <MoneyCell>{mainCategoryTotals.monthlyTotals.SEPTEMBER}</MoneyCell>
                            <MoneyCell>{mainCategoryTotals.monthlyTotals.OCTOBER}</MoneyCell>
                            <MoneyCell>{mainCategoryTotals.monthlyTotals.NOVEMBER}</MoneyCell>
                            <MoneyCell>{mainCategoryTotals.monthlyTotals.DECEMBER}</MoneyCell>
                            <MoneyCell>{mainCategoryTotals.yearlyTotal}</MoneyCell>
                        </tr>
                    </>
            )})}
            <tr>
                <th align='left'>Overall Totals</th>
                <MoneyCell>{totalMonthlyTotals && totalMonthlyTotals.JANUARY}</MoneyCell>
                <MoneyCell>{totalMonthlyTotals && totalMonthlyTotals.FEBRUARY}</MoneyCell>
                <MoneyCell>{totalMonthlyTotals && totalMonthlyTotals.MARCH}</MoneyCell>
                <MoneyCell>{totalMonthlyTotals && totalMonthlyTotals.APRIL}</MoneyCell>
                <MoneyCell>{totalMonthlyTotals && totalMonthlyTotals.MAY}</MoneyCell>
                <MoneyCell>{totalMonthlyTotals && totalMonthlyTotals.JUNE}</MoneyCell>
                <MoneyCell>{totalMonthlyTotals && totalMonthlyTotals.JULY}</MoneyCell>
                <MoneyCell>{totalMonthlyTotals && totalMonthlyTotals.AUGUST}</MoneyCell>
                <MoneyCell>{totalMonthlyTotals && totalMonthlyTotals.SEPTEMBER}</MoneyCell>
                <MoneyCell>{totalMonthlyTotals && totalMonthlyTotals.OCTOBER}</MoneyCell>
                <MoneyCell>{totalMonthlyTotals && totalMonthlyTotals.NOVEMBER}</MoneyCell>
                <MoneyCell>{totalMonthlyTotals && totalMonthlyTotals.DECEMBER}</MoneyCell>
                <MoneyCell>{yearlyTotal}</MoneyCell>
            </tr>
        </>
    );
};

export default OverviewTable;