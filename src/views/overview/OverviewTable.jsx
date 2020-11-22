import React from "react";
import {Table} from 'semantic-ui-react'
import MoneyDisplay from "../MoneyDisplay";
import {useSelector} from "react-redux";

const MoneyCell = (props) => (
    <Table.Cell textAlign='right' selectable><MoneyDisplay amount={props.amount} /></Table.Cell>
);

const OverviewTable = (props) => {
    const {
        makeGetCategoryName,
        monthlyTotals
    } = props;

    const getMainCategoryName = useSelector((state) => makeGetCategoryName(state, 'main'));
    const getSubCategoryName = useSelector((state) => makeGetCategoryName(state, 'sub'));

    const overallTotals = {
        JANUARY: 0,
        FEBRUARY: 0,
        MARCH: 0,
        APRIL: 0,
        MAY: 0,
        JUNE: 0,
        JULY: 0,
        AUGUST: 0,
        SEPTEMBER: 0,
        OCTOBER: 0,
        NOVEMBER: 0,
        DECEMBER: 0,
        YEARLY: 0
    };

    return (
        <Table celled columns={14}>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell>JAN</Table.HeaderCell>
                    <Table.HeaderCell>FEB</Table.HeaderCell>
                    <Table.HeaderCell>MAR</Table.HeaderCell>
                    <Table.HeaderCell>APR</Table.HeaderCell>
                    <Table.HeaderCell>MAY</Table.HeaderCell>
                    <Table.HeaderCell>JUN</Table.HeaderCell>
                    <Table.HeaderCell>JUL</Table.HeaderCell>
                    <Table.HeaderCell>AUG</Table.HeaderCell>
                    <Table.HeaderCell>SEP</Table.HeaderCell>
                    <Table.HeaderCell>OCT</Table.HeaderCell>
                    <Table.HeaderCell>NOV</Table.HeaderCell>
                    <Table.HeaderCell>DEC</Table.HeaderCell>
                    <Table.HeaderCell />
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {monthlyTotals && monthlyTotals.map((mainCategoryTotals) => {
                    overallTotals.JANUARY += mainCategoryTotals.monthlyTotals.JANUARY;
                    overallTotals.FEBRUARY += mainCategoryTotals.monthlyTotals.FEBRUARY;
                    overallTotals.MARCH += mainCategoryTotals.monthlyTotals.MARCH;
                    overallTotals.APRIL += mainCategoryTotals.monthlyTotals.APRIL;
                    overallTotals.MAY += mainCategoryTotals.monthlyTotals.MAY;
                    overallTotals.JUNE += mainCategoryTotals.monthlyTotals.JUNE;
                    overallTotals.JULY += mainCategoryTotals.monthlyTotals.JULY;
                    overallTotals.AUGUST += mainCategoryTotals.monthlyTotals.AUGUST;
                    overallTotals.SEPTEMBER += mainCategoryTotals.monthlyTotals.SEPTEMBER;
                    overallTotals.OCTOBER += mainCategoryTotals.monthlyTotals.OCTOBER;
                    overallTotals.NOVEMBER += mainCategoryTotals.monthlyTotals.NOVEMBER;
                    overallTotals.DECEMBER += mainCategoryTotals.monthlyTotals.DECEMBER;
                    overallTotals.YEARLY += mainCategoryTotals.yearlyTotal;

                    return (
                        <>
                            <Table.Row>
                                <Table.HeaderCell>{getMainCategoryName(mainCategoryTotals.mainCategoryID)}</Table.HeaderCell>
                            </Table.Row>
                            {mainCategoryTotals.subCategoryMonthlyTotals.map((subCategoryTotals) => (
                                <Table.Row>
                                    <Table.Cell>{getSubCategoryName(mainCategoryTotals.mainCategoryID, subCategoryTotals.subCategoryID)}</Table.Cell>
                                    <MoneyCell amount={subCategoryTotals.januaryTotal} />
                                    <MoneyCell amount={subCategoryTotals.februaryTotal} />
                                    <MoneyCell amount={subCategoryTotals.marchTotal} />
                                    <MoneyCell amount={subCategoryTotals.aprilTotal} />
                                    <MoneyCell amount={subCategoryTotals.mayTotal} />
                                    <MoneyCell amount={subCategoryTotals.juneTotal} />
                                    <MoneyCell amount={subCategoryTotals.julyTotal} />
                                    <MoneyCell amount={subCategoryTotals.augustTotal} />
                                    <MoneyCell amount={subCategoryTotals.septemberTotal} />
                                    <MoneyCell amount={subCategoryTotals.octoberTotal} />
                                    <MoneyCell amount={subCategoryTotals.novemberTotal} />
                                    <MoneyCell amount={subCategoryTotals.decemberTotal} />
                                    <MoneyCell amount={subCategoryTotals.yearlyTotal} />
                                </Table.Row>
                            ))}
                            <Table.Row>
                                <Table.Cell>{`${getMainCategoryName(mainCategoryTotals.mainCategoryID)} Total`}</Table.Cell>
                                <MoneyCell amount={mainCategoryTotals.monthlyTotals.JANUARY} />
                                <MoneyCell amount={mainCategoryTotals.monthlyTotals.FEBRUARY} />
                                <MoneyCell amount={mainCategoryTotals.monthlyTotals.MARCH} />
                                <MoneyCell amount={mainCategoryTotals.monthlyTotals.APRIL} />
                                <MoneyCell amount={mainCategoryTotals.monthlyTotals.MAY} />
                                <MoneyCell amount={mainCategoryTotals.monthlyTotals.JUNE} />
                                <MoneyCell amount={mainCategoryTotals.monthlyTotals.JULY} />
                                <MoneyCell amount={mainCategoryTotals.monthlyTotals.AUGUST} />
                                <MoneyCell amount={mainCategoryTotals.monthlyTotals.SEPTEMBER} />
                                <MoneyCell amount={mainCategoryTotals.monthlyTotals.OCTOBER} />
                                <MoneyCell amount={mainCategoryTotals.monthlyTotals.NOVEMBER} />
                                <MoneyCell amount={mainCategoryTotals.monthlyTotals.DECEMBER} />
                                <MoneyCell amount={mainCategoryTotals.yearlyTotal} />
                            </Table.Row>
                        </>
                )})}
                <Table.Row>
                    <Table.HeaderCell>Overall Totals</Table.HeaderCell>
                    <MoneyCell amount={overallTotals.JANUARY} />
                    <MoneyCell amount={overallTotals.FEBRUARY} />
                    <MoneyCell amount={overallTotals.MARCH} />
                    <MoneyCell amount={overallTotals.APRIL} />
                    <MoneyCell amount={overallTotals.MAY} />
                    <MoneyCell amount={overallTotals.JUNE} />
                    <MoneyCell amount={overallTotals.JULY} />
                    <MoneyCell amount={overallTotals.AUGUST} />
                    <MoneyCell amount={overallTotals.SEPTEMBER} />
                    <MoneyCell amount={overallTotals.OCTOBER} />
                    <MoneyCell amount={overallTotals.NOVEMBER} />
                    <MoneyCell amount={overallTotals.DECEMBER} />
                    <MoneyCell amount={overallTotals.YEARLY} />
                </Table.Row>
            </Table.Body>
        </Table>
    );
};

export default OverviewTable;