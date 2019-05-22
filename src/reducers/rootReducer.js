import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import bookingReducer from './bookingReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  appointments: bookingReducer
})

export default rootReducer;
