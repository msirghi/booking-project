import {combineReducers, createStore} from 'redux';
import {navigationReducer} from './reducers/navigationReducer';
import {accountReducer} from "./reducers/accountReducer";

const rootReducer = combineReducers({
    navigation: navigationReducer,
    account: accountReducer
});

export type RootState = ReturnType<typeof rootReducer>
export default createStore(rootReducer);
