import React from 'react'
import {Grid} from 'semantic-ui-react'

export default function OverviewTable(props) {
    return (
        <Grid celled>
            <Grid.Row>
                <Grid.Column width={3}></Grid.Column>
                <Grid.Column width={1} textAlign={'center'}>JAN</Grid.Column>
                <Grid.Column width={1} textAlign={'center'}>FEB</Grid.Column>
                <Grid.Column width={1} textAlign={'center'}>MAR</Grid.Column>
                <Grid.Column width={1} textAlign={'center'}>APR</Grid.Column>
                <Grid.Column width={1} textAlign={'center'}>MAY</Grid.Column>
                <Grid.Column width={1} textAlign={'center'}>JUN</Grid.Column>
                <Grid.Column width={1} textAlign={'center'}>JUL</Grid.Column>
                <Grid.Column width={1} textAlign={'center'}>AUG</Grid.Column>
                <Grid.Column width={1} textAlign={'center'}>SEP</Grid.Column>
                <Grid.Column width={1} textAlign={'center'}>OCT</Grid.Column>
                <Grid.Column width={1} textAlign={'center'}>NOV</Grid.Column>
                <Grid.Column width={1} textAlign={'center'}>DEC</Grid.Column>
                <Grid.Column width={1} textAlign={'center'}></Grid.Column>
            </Grid.Row>
            {props.children}
        </Grid>
    );
}
