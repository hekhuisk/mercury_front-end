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

export {
    getExpenseCategoriesAsArray,
    getIncomeCategoriesAsArray,
    getExpenseCategoriesDropdownOptions,
    getExpenseMainCategoriesDropdownOptions,
    getIncomeCategoriesDropdownOptions,
    getIncomeMainCategoriesDropdownOptions
}