import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;