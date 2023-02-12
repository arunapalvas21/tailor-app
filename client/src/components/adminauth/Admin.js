import React, { Component } from 'react'
import axios from 'axios';

import AdminRegister from './Register';
import AdminLogin from './Login';

var exists = false;

async function setAdminExists() {
	const res = await axios.get('http://localhost:5000/api/users/admin')
	exists = res.data.exists
	return res.data
}

class Admin extends Component {
	render() {
		let pageContent;

		setAdminExists().then(res => console.log(res.exists))

		pageContent = (
			<div>
				{exists ? (
					<AdminLogin />
				) : (
					<AdminRegister />
				)}
			</div>
		)

		return (
			<div className="admin">
				<div className="row">
					<div className="col-md-12">{pageContent}</div>
				</div>
			</div>
		)
	}
}

export default Admin; 