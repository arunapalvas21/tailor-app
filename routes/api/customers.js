const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Load Input Validation
const validateCustomerInput = require('../../validation/customer-input');

// Load Model
const Customer = require('../../models/Customer');

// Create Customers

Customer.findOne({name: req.body.name} && {phoneNo: req.body.phoneNo})
	.then(customer => {
		if(customer) {
			errors.customer = 'Customer already exists';
			return res.status(400).json(errors);
		} else {
			const newCustomer = new Customer({
				name: req.body.name,
				phoneNo: req.body.phoneNo,
				gender: req.body.gender,
			});
		}
	});