import * as FetchUtil from '../util/FetchUtil';

const createMainCategory = (mainCategory) => {
    return FetchUtil.fetchPOST('/category', mainCategory);
};

const createSubCategory = (subCategory) => {
    return FetchUtil.fetchPOST(`/category/${subCategory.mainCategoryID}`, subCategory);
};

const getCategoryGroupings = (categoryType) => {
    return FetchUtil.fetchGET(`/category/?categoryType=${categoryType}`);
}

export {
    createMainCategory,
    createSubCategory,
    getCategoryGroupings
};