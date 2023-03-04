import axios from 'axios';

import { GET_ERRORS, GET_CUSTOMERS, CUSTOMERS_LOADING} from './types';

// Get all tailor profiles
export const getCustomers = () => dispatch => {
	dispatch(setCustomersLoading());
	axios.get('http://localhost:5000/api/customers/all')
	.then( res => {
		console.log(res)
		dispatch({
			type: GET_CUSTOMERS,
			payload: res.data
		})}
	)
	.catch(err => {
		console.log(err)
		dispatch({
			type: GET_CUSTOMERS,
			payload: null
		})}
	);
};

export const createCustomers = (customer, history) => dispatch => {
	axios
	.post('http://localhost:5000/api/customers/create', customer)
	.then(res => history.push('/customers'))
	.catch(err =>
		dispatch({
		type: GET_ERRORS,
		payload: err.response.data
		})
	);
};

// Add upper size
export const addUppersize = (uppersize, history) => dispatch => {
	axios
	.post('/api/customers/uppersize', uppersize)
	.then(res => history.push('/customers'))
	.catch(err =>
		dispatch({
		type: GET_ERRORS,
		payload: err.response.data
		})
	);
};

// Add lower size
export const addLowersize = (lowersize, history) => dispatch => {
	axios
	.post('/api/customers/lowersize', lowersize)
	.then(res => history.push('/customers'))
	.catch(err =>	
		dispatch({
		type: GET_ERRORS,
		payload: err.response.data
		})
	);
};

// Profile loading
export const setCustomersLoading = () => {
	return {
	  type: CUSTOMERS_LOADING
	};
  };