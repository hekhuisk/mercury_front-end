import { all, call } from 'redux-saga/effects';
import { paymentSourceSaga } from './paymentSource';

function* rootSaga() {
    yield all([
        call(paymentSourceSaga)
    ]);
}

export default rootSaga;