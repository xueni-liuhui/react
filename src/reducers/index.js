import {combineReducers} from 'redux';
import fetchdataReducer from './fetchdata_reducer';
import conuterReducer from './counter_reducer';
const  rootReducer=combineReducers({
  counter: conuterReducer,
  fetchdata: fetchdataReducer

})
export default  rootReducer
