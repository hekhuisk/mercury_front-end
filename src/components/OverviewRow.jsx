import React, {useState} from "react";
import {Table, Icon} from "semantic-ui-react";
import PropTypes from "prop-types";

const OverviewCell = (props) =>
    <Table.Cell width={1} textAlign={'center'}>{`$${props.cellValue}`}</Table.Cell>;

export default function OverviewRow(props) {
    const {
        children,
        expandable,
        monthlyTotals,
        textAlign,
        rowName
    } = props;

    const [expanded, setExpanded] = useState(false);

    const yearlyTotal = Object.values(monthlyTotals).reduce((a, b) => a + b);

    return (
        <>
            <Table.Row>
                {expandable
                    ?
                    <Table.Cell
                        width={3}
                        onClick={() => setExpanded(!expanded)}
                    >
                        <Icon name={expanded ? 'caret right' : 'caret down'}/>
                        <b>{rowName}</b>
                    </Table.Cell>
                    :
                    <Table.Cell
                        width={3}
                        textAlign={textAlign}
                    >
                        {rowName}
                    </Table.Cell>
                }
                <OverviewCell cellValue={monthlyTotals.jan} />
                <OverviewCell cellValue={monthlyTotals.feb} />
                <OverviewCell cellValue={monthlyTotals.mar} />
                <OverviewCell cellValue={monthlyTotals.apr} />
                <OverviewCell cellValue={monthlyTotals.may} />
                <OverviewCell cellValue={monthlyTotals.jun} />
                <OverviewCell cellValue={monthlyTotals.jul} />
                <OverviewCell cellValue={monthlyTotals.aug} />
                <OverviewCell cellValue={monthlyTotals.sep} />
                <OverviewCell cellValue={monthlyTotals.oct} />
                <OverviewCell cellValue={monthlyTotals.nov} />
                <OverviewCell cellValue={monthlyTotals.dec} />
                <OverviewCell cellValue={yearlyTotal} />
            </Table.Row>
            {expanded && children}
        </>
    );
}

OverviewRow.defaultProps = {
    textAlign: 'left'
}

OverviewRow.propTypes = {
    children: PropTypes.node,
    expandable: PropTypes.bool,
    monthlyTotals: PropTypes.object.isRequired,
    textAlign: PropTypes.string,
    rowName: PropTypes.string
};
