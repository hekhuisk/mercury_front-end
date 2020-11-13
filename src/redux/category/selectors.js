const getExpenseCategoriesAsArray = (state) => Object.values(state.category.expenseCategories);

const getIncomeCategoriesAsArray = (state) => Object.values(state.category.incomeCategories);

const getExpenseCategoriesDropdownOptions = (state) => getCategoriesDropdownOptions(getExpenseCategoriesAsArray(state));

const getIncomeCategoriesDropdownOptions = (state) => getCategoriesDropdownOptions(getIncomeCategoriesAsArray(state));

const getCategoriesDropdownOptions = (categories) => {
    const options = [];

    categories.forEach((categoryGrouping) => {
        const mainCategory = categoryGrouping.mainCategory;
        categoryGrouping.subCategories.forEach((subCategory) => {
            const text = `${mainCategory.name} - ${subCategory.name}`;
            const value = `{
                "mainCategoryID": ${mainCategory.mainCategoryID},
                "subCategoryID": ${subCategory.subCategoryID}
            }`;

            options.push({
                key: text,
                text,
                value
            });
        });
    });

    return options;
};

const getExpenseMainCategoriesDropdownOptions = (state) => getMainCategoriesDropdownOptions(getExpenseCategoriesAsArray(state));

const getIncomeMainCategoriesDropdownOptions = (state) => getMainCategoriesDropdownOptions(getIncomeCategoriesAsArray(state));

const getMainCategoriesDropdownOptions = (categories) =>
    categories.map((categoryGrouping) => {
        const mainCategory = categoryGrouping.mainCategory;
        return {
            key: mainCategory.name,
            text: mainCategory.name,
            value: mainCategory.mainCategoryID
        };
    });

const makeGetExpenseCategoryName = (state, option) => (mainCategoryID, subCategoryID) => {
    const categoryGroupings = getExpenseCategoriesAsArray(state);

    for (let i = 0; i < categoryGroupings.length; i++) {
        const categoryGrouping = categoryGroupings[i];
        const mainCategory = categoryGrouping.mainCategory;
        if (mainCategory.mainCategoryID === mainCategoryID) {
            if (option === 'main') {
                return mainCategory.name;
            }

            for (let j = 0; j < categoryGrouping.subCategories.length; j++) {
                const subCategory = categoryGrouping.subCategories[j];
                if (subCategory.subCategoryID === subCategoryID) {
                    return option === 'combo' ? `${mainCategory.name} - ${subCategory.name}` : subCategory.name;
                }
            }
        }
    }

    return '';
};

const makeGetIncomeCategoryName = (state, option) => (mainCategoryID, subCategoryID) => {
    const categoryGroupings = getIncomeCategoriesAsArray(state);

    for (let i = 0; i < categoryGroupings.length; i++) {
        const categoryGrouping = categoryGroupings[i];
        const mainCategory = categoryGrouping.mainCategory;
        if (mainCategory.mainCategoryID === mainCategoryID) {
            if (option === 'main') {
                return mainCategory.name;
            }

            for (let j = 0; j < categoryGrouping.subCategories.length; j++) {
                const subCategory = categoryGrouping.subCategories[j];
                if (subCategory.subCategoryID === subCategoryID) {
                    return option === 'combo' ? `${mainCategory.name} - ${subCategory.name}` : subCategory.name;
                }
            }
        }
    }

    return '';
};

export {
    getExpenseCategoriesAsArray,
    getIncomeCategoriesAsArray,
    getExpenseCategoriesDropdownOptions,
    getExpenseMainCategoriesDropdownOptions,
    getIncomeCategoriesDropdownOptions,
    getIncomeMainCategoriesDropdownOptions,
    makeGetExpenseCategoryName,
    makeGetIncomeCategoryName
}