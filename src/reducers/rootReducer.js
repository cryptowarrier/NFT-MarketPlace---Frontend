import { combineReducers } from 'redux';
import itemReducer from './itemSlice';
import userReducer from './userSlice';
import networkReducer from './networkSlice';

const rootReducer = combineReducers({
  item: itemReducer,
  user: userReducer,
  network: networkReducer
});

export default rootReducer;