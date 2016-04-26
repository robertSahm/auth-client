import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'
import authReducer from './auth_reducer'
import usersReducer from './users'
 
const rootReducer = combineReducers({ 
  form,
  auth: authReducer, // could also just write 'auth'
  users: usersReducer
});

export default rootReducer;
