import React from "react";
import {Header, Table} from "semantic-ui-react";

const CategoriesTable = (props) => {
    const {
        categoryType,
        categoryGroupings
    } = props;

    const tableLabel = categoryType === 'EXPENSE'
        ? 'Expense Categories'
        : 'Income Categories';

    return (
        <div>
            <Header>
                {tableLabel}
            </Header>
            {categoryGroupings && categoryGroupings.map((categoryGrouping) => {
                return (
                    <Table
                        attached
                        key={categoryGrouping.mainCategory.mainCategoryID}
                    >
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>
                                    {categoryGrouping.mainCategory.name}
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {categoryGrouping.subCategories.map((subCategory) => {
                                return (
                                    <Table.Row key={subCategory.subCategoryID}>
                                        <Table.Cell>
                                            {subCategory.name}
                                        </Table.Cell>
                                    </Table.Row>
                                );
                            })}
                        </Table.Body>
                    </Table>
                );
            })}
        </div>
    );
};

export default CategoriesTable;