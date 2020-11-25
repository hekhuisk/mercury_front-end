import React from "react";
import {useSelector} from "react-redux";
import MoneyCell from "../MoneyCell";

const OverviewTable = (props) => {
    const {
        makeGetCategoryName,
        monthlyTotals,
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
                                className='row-label main-category-row-label'
                            >
                                {getMainCategoryName(mainCategoryTotals.mainCategoryID)}
                            </th>
                        </tr>
                        {mainCategoryTotals.subCategoryMonthlyTotals.map((subCategoryTotals) => (
                            <tr>
                                <th className='row-label sub-category-row-label'>{getSubCategoryName(mainCategoryTotals.mainCategoryID, subCategoryTotals.subCategoryID)}</th>
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
                            <th className='row-label main-category-row-label main-category-row-label__total'>{`${getMainCategoryName(mainCategoryTotals.mainCategoryID)} Total`}</th>
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
        </>
    );
};

export default OverviewTable;