import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'
import authReducer from './auth_reducer'
 
const rootReducer = combineReducers({ 
  form,
  auth: authReducer // could also just write 'auth'
});

export default rootReducer;
