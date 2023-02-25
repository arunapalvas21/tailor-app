import axios from 'axios';


const setAdminAuthToken = token => {
	if(token) {
		//apply to every request
		axios.defaults.headers.common['Authorization'] = token;
	} else {
		//delete user auth header
		delete axios.defaults.headers.common['Authorization'];
	}
}

export default setAdminAuthToken;