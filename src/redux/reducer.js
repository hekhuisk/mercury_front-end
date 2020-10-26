import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { categoryReducer } from './category';
import { expenseReducer } from './expense';
import { incomeReducer } from './income';
import { paymentSourceReducer } from './paymentSource';
import { userReducer } from './user';

const createRootReducer = (history) => combineReducers({
    category: categoryReducer,
    expense: expenseReducer,
    income: incomeReducer,
    paymentSource: paymentSourceReducer,
    router: connectRouter(history),
    user: userReducer
});

export default createRootReducer;