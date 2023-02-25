import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { AdminRegister } from '../../actions/adminauthActions';


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

	componentWillReceiveProps(nextProps) {
		if(nextProps.errors) {
			this.setState({errors: nextProps.errors});
		}
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

		this.props.AdminRegister(newUser, this.props.history);
	}

	render() {
		const { errors } = this.state;

		return (
			<div className="register">
			<div className="container">
			<div className="row">
				<div className="col-md-8 m-auto">
				<h1 className="display-4 text-center">Admin Sign Up</h1>
				{/* <p className="lead text-center">Create your account</p> */}
				<form noValidate onSubmit={this.onSubmit}>
					<div className="form-group">
					<input type="email" 
					className={classnames('form-control form-control-lg', {
						'is-invalid': errors.email
					})}
					placeholder="Email Address"
					 name="email" 
					 value={this.state.email}
					 onChange={this.onChange}
					 />
					{errors.email && (<div className="invalid-feedback"> {errors.email} </div>)}
					{/* <small classNameName="form-text text-muted"></small> */}
					</div>
					<div className="form-group">
					<input type="password"
					className={classnames('form-control form-control-lg', {
						'is-invalid': errors.password
					})}
					placeholder="Password"
					name="password"
					value={this.state.password}
					onChange={this.onChange}
					 />
					 {errors.password && (<div className="invalid-feedback"> {errors.password} </div>)}
					</div>
					<div className="form-group">
					<input type="password" 
					className={classnames('form-control form-control-lg', {
						'is-invalid': errors.password2
					})} 
					placeholder="Confirm Password" 
					name="password2"
					value={this.state.password2}
					onChange={this.onChange}
					 />
					 {errors.password2 && (<div className="invalid-feedback"> {errors.password2} </div>)}
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

Register.propTypes = {
	AdminRegister: PropTypes.func.isRequired,
	adminauth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	adminauth: state.adminauth,
	errors: state.errors
});

export default connect(mapStateToProps, { AdminRegister })(withRouter(Register)); 