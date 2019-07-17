import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import videos from './videos';

const appReducers = combineReducers({
  videos,
});

const appStore = createStore(appReducers, applyMiddleware(thunk));

export default appStore;
