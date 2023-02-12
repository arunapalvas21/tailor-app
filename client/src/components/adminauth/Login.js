import React, { Component } from 'react'
import axios from 'axios';

class Login extends Component {

	constructor() {
		super();
		this.state = {
			password: '',
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

		const user = {
			password: this.state.password,
		}

		axios.post('http://localhost:5000/api/users/admin-login', user)
		.then(res => console.log(res.data))
		.catch(err => console.log(err.response.data));
	}

  render() {
	return (
		<div className="login">
		<div className="container">
		  <div className="row">
			<div className="col-md-8 m-auto">
			  <h1 className="display-4 text-center">Admin Log In</h1>
			  <form onSubmit={this.onSubmit}>
				<div className="form-group">
				  <input type="password" className="form-control form-control-lg" placeholder="Password" name="password"
				   value={this.state.password} 
				   onChange={this.onChange} />
				</div>
				<input type="submit" className="btn btn-info btn-block mt-4" value="submit"/>
			  </form>
			</div>
		  </div>
		</div>
	  </div>
	
	)
  }
}

export default Login; 