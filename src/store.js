import { createStore,compose,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
const store=createStore(//通过thunk中间件异步派发活动
  rootReducer,
  compose(applyMiddleware(...[thunk])),
)
export default store
