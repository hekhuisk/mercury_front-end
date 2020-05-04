import PropTypes from "prop-types";
import React from "react";
import Row from "./table/Row";
import Cell from "./table/Cell";

export default function OverviewRow(props) {
    const {
        monthlyTotals,
        rowName
    } = props;

    const yearlyTotal = Object.values(monthlyTotals).reduce((a, b) => a + b);

    return (
        <Row>
            <Cell colSpan={2}>{rowName}</Cell>
            <Cell colSpan={1}>{`\$${monthlyTotals.jan}`}</Cell>
            <Cell colSpan={1}>{`\$${monthlyTotals.feb}`}</Cell>
            <Cell colSpan={1}>{`\$${monthlyTotals.mar}`}</Cell>
            <Cell colSpan={1}>{`\$${monthlyTotals.apr}`}</Cell>
            <Cell colSpan={1}>{`\$${monthlyTotals.may}`}</Cell>
            <Cell colSpan={1}>{`\$${monthlyTotals.jun}`}</Cell>
            <Cell colSpan={1}>{`\$${monthlyTotals.jul}`}</Cell>
            <Cell colSpan={1}>{`\$${monthlyTotals.aug}`}</Cell>
            <Cell colSpan={1}>{`\$${monthlyTotals.sep}`}</Cell>
            <Cell colSpan={1}>{`\$${monthlyTotals.oct}`}</Cell>
            <Cell colSpan={1}>{`\$${monthlyTotals.nov}`}</Cell>
            <Cell colSpan={1}>{`\$${monthlyTotals.dec}`}</Cell>
            <Cell colSpan={1}>{`\$${yearlyTotal}`}</Cell>
        </Row>
    );
};

OverviewRow.propTypes = {
    monthlyTotals: PropTypes.object,
    rowName: PropTypes.string
};