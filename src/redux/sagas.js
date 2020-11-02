import { all, call } from 'redux-saga/effects';
import { categorySaga } from './category';
import { paymentSourceSaga } from './paymentSource';

function* rootSaga() {
    yield all([
        call(categorySaga),
        call(paymentSourceSaga)
    ]);
}

export default rootSaga;