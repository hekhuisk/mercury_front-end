import React from 'react'
import { Accordion, Grid } from 'semantic-ui-react'
import OverallOverviewTable from "../OverallOverviewTable";
import Row from "../../components/table/Row";
import Cell from "../../components/table/Cell";
import Header from "../../components/table/Header";
import Table from "../../components/table/Table";


const panels = [
    {
        key: 1,
        title: {content: <Table>
                <Header>
            <Cell>Home</Cell>
            <Cell>0</Cell>
            <Cell>1</Cell>
            <Cell>2</Cell>
            <Cell>3</Cell>
            <Cell>4</Cell>
            <Cell>5</Cell>
            <Cell>6</Cell>
            <Cell>7</Cell>
            <Cell>8</Cell>
            <Cell>9</Cell>
            <Cell>10</Cell>
            <Cell>11</Cell>
            <Cell>12</Cell>
                </Header></Table>},
        content: { content: <OverallOverviewTable />}
    },
    {
        key: 2,
        title: "Home",
        content: ''
    }
];

export default function ExpenseCategoryOverviewTable() {
    const category = '';
    const monthlyTotals = {};

// has many ExpenseCategoryOverviewRow

    return (
        <Accordion
            defaultActiveIndex={[0]}
            panels={panels}
            exclusive={false}
            fluid
        />
    );
}