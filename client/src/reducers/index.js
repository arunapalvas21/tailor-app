import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import profileReducer from './profileReducer';
import dresslistReducer from './dresslistReducer';
import customerReducer from './customerReducer';

export  default combineReducers({
	auth: authReducer,
	profiles: profileReducer,
	errors: errorReducer,
	dress: dresslistReducer,
	cust: customerReducer
}); 