import { createStore } from 'redux';
import initialState from './initailState';
import { combineReducers } from 'redux';
import tableReducer from './tableReducer';
import { applyMiddleware} from 'redux';
import thunk from 'redux-thunk';


const subreducers = {
    table: tableReducer,
}
  
const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;