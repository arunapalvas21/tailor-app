import axios from 'axios';
import { GET_TAILORS_PROFILE, PROFILE_LOADING, CLEAR_CURRENT_PROFILE } from './types';

// Get all tailor profiles
export const getTailorsProfile = () => dispatch => {
	dispatch(setProfileLoading());
	axios.get('http://localhost:5000/api/tailors/all')
	.then( res => {
		console.log(res)
		dispatch({
			type: GET_TAILORS_PROFILE,
			payload: res.data
		})}
	)
	.catch(err => {
		console.log(err)
		dispatch({
			type: GET_TAILORS_PROFILE,
			payload: null
		})}
	);
};

// Profile loading
export const setProfileLoading = () => {
	return {
		type: PROFILE_LOADING
	};
};

// Clear profile
export const clearCurrentProfile = () => {
	return {
	  type: CLEAR_CURRENT_PROFILE
	};
  };
  