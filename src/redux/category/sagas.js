import { call, put, takeLatest } from 'redux-saga/effects'
import * as actions from './actions';
import * as types from './types';
import * as categoryAPI from '../../api/CategoryAPI';

function* fetchCategories() {
    try {
        const expenseCategories = yield call(categoryAPI.getCategoryGroupings,'EXPENSE');
        const incomeCategories = yield call(categoryAPI.getCategoryGroupings,'INCOME');

        yield put(actions.requestFetchCategoriesSucceeded(expenseCategories, incomeCategories));
    } catch (e) {
        yield put(actions.requestFetchCategoriesFailed(e.message));
    }
}

function* categorySaga() {
    yield takeLatest(types.CATEGORIES_FETCH_REQUESTED, fetchCategories);
}

export default categorySaga;