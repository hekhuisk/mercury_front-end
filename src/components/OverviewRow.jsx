import React, {useState} from "react";
import {Grid, Icon} from "semantic-ui-react";
import PropTypes from "prop-types";

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
            <Grid.Row>
                {expandable
                    ?
                    <Grid.Column
                        width={3}
                        onClick={() => setExpanded(!expanded)}
                    >
                        <Icon name={expanded ? 'caret right' : 'caret down'}/>
                        <b>{rowName}</b>
                    </Grid.Column>
                    :
                    <Grid.Column
                        width={3}
                        textAlign={textAlign}
                    >
                        {rowName}
                    </Grid.Column>
                }
                <Grid.Column width={1} textAlign={'center'}>{`$${monthlyTotals.jan}`}</Grid.Column>
                <Grid.Column width={1} textAlign={'center'}>{`$${monthlyTotals.feb}`}</Grid.Column>
                <Grid.Column width={1} textAlign={'center'}>{`$${monthlyTotals.mar}`}</Grid.Column>
                <Grid.Column width={1} textAlign={'center'}>{`$${monthlyTotals.apr}`}</Grid.Column>
                <Grid.Column width={1} textAlign={'center'}>{`$${monthlyTotals.may}`}</Grid.Column>
                <Grid.Column width={1} textAlign={'center'}>{`$${monthlyTotals.jun}`}</Grid.Column>
                <Grid.Column width={1} textAlign={'center'}>{`$${monthlyTotals.jul}`}</Grid.Column>
                <Grid.Column width={1} textAlign={'center'}>{`$${monthlyTotals.aug}`}</Grid.Column>
                <Grid.Column width={1} textAlign={'center'}>{`$${monthlyTotals.sep}`}</Grid.Column>
                <Grid.Column width={1} textAlign={'center'}>{`$${monthlyTotals.oct}`}</Grid.Column>
                <Grid.Column width={1} textAlign={'center'}>{`$${monthlyTotals.nov}`}</Grid.Column>
                <Grid.Column width={1} textAlign={'center'}>{`$${monthlyTotals.dec}`}</Grid.Column>
                <Grid.Column width={1} textAlign={'center'}>{`$${yearlyTotal}`}</Grid.Column>
            </Grid.Row>
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
