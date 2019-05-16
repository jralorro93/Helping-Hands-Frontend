import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  signup: signupReducer
})

export default rootReducer;
