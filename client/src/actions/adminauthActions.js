import axios from 'axios';
import setAdminAuthToken from '../utils/setAdminAuthToken';
import jwt_decode from 'jwt-decode';
import { GET_ERRORS, SET_CURRENT_USER } from './types';

//Register User
export const AdminRegister =(user, history) => dispatch => {
	axios.post('http://localhost:5000/api/users/admin-register', user)
	.then( res => history.push('/admin-login'))
	.catch(err =>
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		})
	);
};

//Login Get User Token
export const AdminLogin = user => dispatch => {
	axios.post('http://localhost:5000/api/users/admin-login', user)
		.then(res => {
			//Save to localStorage
			const { token } = res.data;
			//Set token to ls
			localStorage.setItem('jwtToken', token);
			//Set token to UserAuth header
			setAdminAuthToken(token);
			//Decode  token to get user data
			const decoded = jwt_decode(token);
			//Set current user
			dispatch(setCurrentAdmin(decoded));
		})
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		 );
};

//Set logged in user
export const setCurrentAdmin = (decoded) => {
	return {
		type: SET_CURRENT_USER,
		payload: decoded
	}
}
