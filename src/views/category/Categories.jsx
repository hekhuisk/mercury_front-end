import React from "react";
import CategoriesTable from "./CategoriesTable";
import {Button, Header, Icon} from "semantic-ui-react";
import SaveMainCategoryModal from "./SaveMainCategoryModal";
import SaveSubCategoryModal from "./SaveSubCategoryModal";
import * as categoryAPI from "../../api/CategoryAPI";
import {useDispatch, useSelector} from "react-redux";
import {categoryActions, categorySelectors} from "../../redux/category";

const Categories = () => {
    // Save main category modal state
    const [openMain, setOpenMain] = React.useState(false);
    const [openSub, setOpenSub] = React.useState(false);

    const [doFetch, setDoFetch] = React.useState(true);

    const dispatch = useDispatch();

    const expenseCategoryGroupings = useSelector(categorySelectors.getExpenseCategoriesAsArray);
    const incomeCategoryGroupings = useSelector(categorySelectors.getIncomeCategoriesAsArray);

    React.useEffect(() => {
        if (doFetch) {
            setDoFetch(false);
            dispatch(categoryActions.fetchCategories());
        }
    }, [doFetch]);

    const handleCloseMain = (doFetch = false) => {
        setOpenMain(false);
        setDoFetch(doFetch);
    };

    const handleSaveMainCategory = async (mainCategory) => {
        mainCategory.userID = 1;

        await categoryAPI.createMainCategory(mainCategory);

        handleCloseMain(true);
    };

    const handleCloseSub = (doFetch = false) => {
        setOpenSub(false);
        setDoFetch(doFetch);
    };

    const handleSaveSubCategory = async (subCategory) => {
        await categoryAPI.createSubCategory(subCategory);

        handleCloseSub(true);
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