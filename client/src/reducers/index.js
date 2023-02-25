import { combineReducers } from 'redux';
import userauthReducer from './userauthReducer';
import adminauthReducer from './adminauthReducer';
import errorReducer from './errorReducer';


export  default combineReducers({
	auth: userauthReducer,
	adminauth: adminauthReducer,
	errors: errorReducer

});