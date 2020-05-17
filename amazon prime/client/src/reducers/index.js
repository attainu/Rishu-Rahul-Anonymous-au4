import { combineReducers } from 'redux';
import errorReducer from './error';
import authReducer from './auth';
import moviesReducer from './movies';
import showsReducer from './shows';
import homepageReducer from './homepage'

export default combineReducers({
  error: errorReducer,
  auth: authReducer,
  movies : moviesReducer,
  homepage : homepageReducer,
  shows : showsReducer
});
