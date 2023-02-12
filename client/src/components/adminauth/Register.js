import React, { Component } from 'react';
import axios from 'axios';


class Register extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			password2: '',
			errors: {}
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({[e.target.name]: e.target.value});
	}

	onSubmit(e) {
		e.preventDefault();

		const newUser = {
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2
		}

		axios.post('http://localhost:5000/api/users/admin-register', newUser)
		.then(res => console.log(res.data))
		.catch(err => console.log(err.response.data));
	}

	render() {
		return (
			<div className="register">
			<div className="container">
			<div className="row">
				<div className="col-md-8 m-auto">
				<h1 className="display-4 text-center">Sign Up</h1>
				<p className="lead text-center">Create your account</p>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
					<input type="email" 
					className="form-control form-control-lg" 
					placeholder="Email Address"
					 name="email" 
					 value={this.state.email}
					 onChange={this.onChange}
					 />
					{/* <small classNameName="form-text text-muted"></small> */}
					</div>
					<div className="form-group">
					<input type="password"
					className="form-control form-control-lg"
					placeholder="Password"
					name="password"
					value={this.state.password}
					onChange={this.onChange}
					 />
					</div>
					<div className="form-group">
					<input type="password" 
					className="form-control form-control-lg" 
					placeholder="Confirm Password" 
					name="password2"
					value={this.state.password2}
					onChange={this.onChange}
					 />
					</div>
					<input type="submit" className="btn btn-info btn-block mt-4" value="Submit"/>
				</form>
				</div>
			</div>
			</div>
		</div>
		
		)
  	}
}

export default Register; 