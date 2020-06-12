import { combineReducers, createStore } from 'redux';
import { navigationReducer } from './reducers/navigationReducer';

const rootReducer = combineReducers({
  navigation: navigationReducer
});

export type RootState = ReturnType<typeof rootReducer>
export default createStore(rootReducer);
