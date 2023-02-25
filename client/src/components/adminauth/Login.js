import React, { Component } from 'react'
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AdminLogin } from '../../actions/adminauthActions';

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

	componentWillReceiveProps(nextProps){
		if(nextProps.adminauth.isAuthenticated) {
			console.log(this.props);
			this.props.history.push('/admindashboard');
		}

		// if(nextProps.errors) {
		// 	this.setState({errors: nextProps.errors});
		// }
	}

	onChange(e) {
		this.setState({[e.target.name]: e.target.value});
	}

	onSubmit(e) {
		e.preventDefault();

		const user = {
			password: this.state.password,
		}

		this.props.AdminLogin(user);
	}

  render() {
	const { errors } = this.state;

	return (
		<div className="login">
		<div className="container">
		  <div className="row">
			<div className="col-md-8 m-auto">
			  <h1 className="display-4 text-center">Admin Log In</h1>
			  <form noValidate onSubmit={this.onSubmit}>
				<div className="form-group">
				  <input type="password" 
					className={classnames('form-control form-control-lg', {
						'is-invalid': errors.password
					})} 
					placeholder="Password" name="password"
					value={this.state.password} 
					onChange={this.onChange} />
					{errors.password && (<div className="invalid-feedback"> {errors.password} </div>)}
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

Login.propTypes = {
	AdminLogin: PropTypes.func.isRequired,
	adminauth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	adminauth: state.adminauth,
	errors: state.errors
});

export default connect(mapStateToProps, { AdminLogin })(Login); 