const mongoose = require('mongoose');
const { createIndexes } = require('./User');
const Schema = mongoose.Schema;

// Create Schema
const CustomerSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	phoneNo: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
	gender: {
		type: String,
		required: true
	},
	size: [{
		upper: [{
			neck: {
				type: String,
				required: false
			},
			shoulder: {
				type: String,
				required: false
			},
			fullarm: {
				type: String,
				required: false
			},
			halfarm: {
				type: String,
				required: false
			},
			sleeve: {
				type: String,
				required: false
			},
			wrist: {
				type: String,
				required: false
			},
			elbow: {
				type: String,
				required: false
			},
			chest: {
				type: String,
				required: false
			},
			hip: {
				type: String,
				required: false
			},
			body: {
				type: String,
				required: false
			}
		}],
		lower: [{
			thigh: {
				type: String,
				required: false
			},
      		knee: {
				type: String,
				required: false
			},
     		seat: {
				type: String,
				required: false
			},
      		leg_half: {
				type: String,
				required: false
			},
      		leg_full: {
				type: String,
				required: false
			},
      		ankle: {
				type: String,
				required: false
			}
		}]
	}]
});

module.exports = Customer = momgoose.model('customer', CustomerSchema);