import React from "react";
import CategoriesTable from "./CategoriesTable";
import {Button, Header, Icon} from "semantic-ui-react";
import SaveMainCategoryModal from "./SaveMainCategoryModal";
import SaveSubCategoryModal from "./SaveSubCategoryModal";

const expenseCategoryGroupingsTestData = [
    {
        categoryType: 'EXPENSE',
        mainCategory: {
            budgetID: 1,
            mainCategoryID: 1,
            name: 'Home'
        },
        subCategories: [
            {
                mainCategoryID: 1,
                name: 'Furniture',
                subCategoryID: 1
            },
            {
                mainCategoryID: 1,
                name: 'Lawn / Garden',
                subCategoryID: 2
            },
            {
                mainCategoryID: 1,
                name: 'Maintenance',
                subCategoryID: 3
            }
        ]
    },
    {
        categoryType: 'EXPENSE',
        mainCategory: {
            budgetID: 1,
            mainCategoryID: 2,
            name: 'Insurance'
        },
        subCategories: [
            {
                mainCategoryID: 2,
                name: 'Yukon',
                subCategoryID: 4
            },
            {
                mainCategoryID: 2,
                name: 'Escape',
                subCategoryID: 5
            },
            {
                mainCategoryID: 2,
                name: 'House',
                subCategoryID: 6
            }
        ]
    }
];

const incomeCategoryGroupingsTestData = [
    {
        categoryType: 'INCOME',
        mainCategory: {
            budgetID: 1,
            mainCategoryID: 3,
            name: 'Work'
        },
        subCategories: [
            {
                mainCategoryID: 3,
                name: 'Kyle',
                subCategoryID: 7
            },
            {
                mainCategoryID: 3,
                name: 'Sara',
                subCategoryID: 8
            }
        ]
    }
];

const Categories = () => {
    // Save main category modal state
    const [openMain, setOpenMain] = React.useState(false);
    const [openSub, setOpenSub] = React.useState(false);

    const [expenseCategoryGroupings, setExpenseCategoryGroupings] = React.useState([]);
    const [incomeCategoryGroupings, setIncomeCategoryGroupings] = React.useState([]);

    const fetchCategoryGroupings = async () => {
        setExpenseCategoryGroupings(expenseCategoryGroupingsTestData);
        setIncomeCategoryGroupings(incomeCategoryGroupingsTestData);
    };

    React.useEffect(() => {
        fetchCategoryGroupings();
    }, []);

    const handleCloseMain = () => {
        setOpenMain(false);
        fetchCategoryGroupings();
    };

    const handleSaveMainCategory = async (mainCategory) => {
        mainCategory.userID = 1;
        mainCategory.budgetID = 1;

        console.log(mainCategory);

        handleCloseMain();
    };

    const handleCloseSub = () => {
        setOpenSub(false);
        fetchCategoryGroupings();
    };

    const handleSaveSubCategory = async (subCategory) => {
        console.log(subCategory);

        handleCloseSub();
    };

    const handleAddMainCategory = () => {
        setOpenMain(true);
    };

    const handleAddSubCategory = () => {
        setOpenSub(true);
    };

    return (
        <div>
            <Header>
                Categories
            </Header>
            <Button
                icon
                labelPosition='left'
                onClick={handleAddMainCategory}
            >
                <Icon name='add' />
                Add Main Category
            </Button>
            <Button
                icon
                labelPosition='left'
                onClick={handleAddSubCategory}
            >
                <Icon name='add' />
                Add Sub Category
            </Button>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <CategoriesTable
                    categoryType={'EXPENSE'}
                    categoryGroupings={expenseCategoryGroupings}
                />
                <CategoriesTable
                    categoryType={'INCOME'}
                    categoryGroupings={incomeCategoryGroupings}
                />
            </div>
            <SaveMainCategoryModal
                open={openMain}
                onClose={handleCloseMain}
                onSave={handleSaveMainCategory}
            />
            <SaveSubCategoryModal
                open={openSub}
                onClose={handleCloseSub}
                onSave={handleSaveSubCategory}
            />
        </div>
    );
};

export default Categories;