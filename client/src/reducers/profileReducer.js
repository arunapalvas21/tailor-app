import { GET_TAILORS_PROFILE, PROFILE_LOADING, CLEAR_CURRENT_PROFILE } from '../actions/types'

const initialState = {
	loading: false,
	tailors: null
};

export default function(state = initialState, action) {
	console.log(action)
	switch(action.type) {
		case GET_TAILORS_PROFILE:
			return {
				...state,
				loading: false,
				tailors: action.payload
			}
		case PROFILE_LOADING:
			return {
				...state,
				loading: true
			};
		case CLEAR_CURRENT_PROFILE:
			return {
				...state,
				profile: null
			};
		default: 
			return state;
	}
}