import React from 'react'
import { Button, Grid, Tab } from 'semantic-ui-react'
import OverallOverviewTable from "./views/OverallOverviewTable";
import ExpenseCategoryOverviewTable from "./views/expense/ExpenseCategoryOverviewTable";

class TestPane extends React.Component {
    constructor() {
        super();
        this.state = {
            homeExpanded: false
        };
    }

    render() {
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
                    <Grid.Column width={1} textAlign={'center'}>TOTAL</Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <Button
                            icon={this.state.homeExpanded ? 'caret right' : 'caret down'}
                            onClick={() => this.setState({homeExpanded: !this.state.homeExpanded})}
                        />
                        <b>Home</b>
                    </Grid.Column>
                    <Grid.Column width={1} textAlign={'center'}>$0</Grid.Column>
                    <Grid.Column width={1} textAlign={'center'}>$0</Grid.Column>
                    <Grid.Column width={1} textAlign={'center'}>$0</Grid.Column>
                    <Grid.Column width={1} textAlign={'center'}>$0</Grid.Column>
                    <Grid.Column width={1} textAlign={'center'}>$0</Grid.Column>
                    <Grid.Column width={1} textAlign={'center'}>$0</Grid.Column>
                    <Grid.Column width={1} textAlign={'center'}>$0</Grid.Column>
                    <Grid.Column width={1} textAlign={'center'}>$0</Grid.Column>
                    <Grid.Column width={1} textAlign={'center'}>$0</Grid.Column>
                    <Grid.Column width={1} textAlign={'center'}>$0</Grid.Column>
                    <Grid.Column width={1} textAlign={'center'}>$0</Grid.Column>
                    <Grid.Column width={1} textAlign={'center'}>$0</Grid.Column>
                    <Grid.Column width={1} textAlign={'center'}>$0</Grid.Column>
                </Grid.Row>
                {this.state.homeExpanded &&
                    <>
                        <Grid.Row>
                            <Grid.Column width={3} textAlign={'right'}>Mortgage</Grid.Column>
                            <Grid.Column width={1} textAlign={'center'}>$0</Grid.Column>
                            <Grid.Column width={1} textAlign={'center'}>$0</Grid.Column>
                            <Grid.Column width={1} textAlign={'center'}>$0</Grid.Column>
                            <Grid.Column width={1} textAlign={'center'}>$0</Grid.Column>
                            <Grid.Column width={1} textAlign={'center'}>$0</Grid.Column>
                            <Grid.Column width={1} textAlign={'center'}>$0</Grid.Column>
                            <Grid.Column width={1} textAlign={'center'}>$0</Grid.Column>
                            <Grid.Column width={1} textAlign={'center'}>$0</Grid.Column>
                            <Grid.Column width={1} textAlign={'center'}>$0</Grid.Column>
                            <Grid.Column width={1} textAlign={'center'}>$0</Grid.Column>
                            <Grid.Column width={1} textAlign={'center'}>$0</Grid.Column>
                            <Grid.Column width={1} textAlign={'center'}>$0</Grid.Column>
                            <Grid.Column width={1} textAlign={'center'}>$0</Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={3} textAlign={'right'}>Home Insurance</Grid.Column>
                            <Grid.Column width={1} textAlign={'center'}>$0</Grid.Column>
                            <Grid.Column width={1} textAlign={'center'}>$0</Grid.Column>
                            <Grid.Column width={1} textAlign={'center'}>$0</Grid.Column>
                            <Grid.Column width={1} textAlign={'center'}>$0</Grid.Column>
                            <Grid.Column width={1} textAlign={'center'}>$0</Grid.Column>
                            <Grid.Column width={1} textAlign={'center'}>$0</Grid.Column>
                            <Grid.Column width={1} textAlign={'center'}>$0</Grid.Column>
                            <Grid.Column width={1} textAlign={'center'}>$0</Grid.Column>
                            <Grid.Column width={1} textAlign={'center'}>$0</Grid.Column>
                            <Grid.Column width={1} textAlign={'center'}>$0</Grid.Column>
                            <Grid.Column width={1} textAlign={'center'}>$0</Grid.Column>
                            <Grid.Column width={1} textAlign={'center'}>$0</Grid.Column>
                            <Grid.Column width={1} textAlign={'center'}>$0</Grid.Column>
                        </Grid.Row>
                    </>
                }
            </Grid>
        );
    }
}

const panes = [
    { menuItem: 'Overview', render: () => <Tab.Pane><OverallOverviewTable /></Tab.Pane> },
    { menuItem: 'Expenses', render: () => <Tab.Pane><ExpenseCategoryOverviewTable /></Tab.Pane> },
    { menuItem: 'Income', render: () => <Tab.Pane><TestPane/></Tab.Pane> },
]

const TabExampleBasic = () => <Tab panes={panes} />

export default TabExampleBasic
