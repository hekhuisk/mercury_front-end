import { call, put, takeLatest } from 'redux-saga/effects'
import * as actions from './actions';
import * as types from './types';
import * as paymentSourceAPI from '../../api/PaymentSourceAPI';

function* fetchPaymentSources() {
    try {
        const paymentSources = yield call(paymentSourceAPI.getAllPaymentSources);
        yield put(actions.requestFetchPaymentSucceeded(paymentSources));
    } catch (e) {
        yield put(actions.requestFetchPaymentFailed(e.message));
    }
}

function* paymentSourceSaga() {
    yield takeLatest(types.PAYMENT_SOURCES_FETCH_REQUESTED, fetchPaymentSources);
}

export default paymentSourceSaga;