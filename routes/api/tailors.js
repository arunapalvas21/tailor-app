const express = require('express');
const router = express.Router();
// const bcrypt = require('bcryptjs');
// const passport = require('passport');

// Load Model
const User = require('../../models/User');
// const Tailor = require('../../models/Tailor');

//@route	GET api/tailor/all
//@desc		Get all tailors
//@access	Public
router.get('/all', (req, res) => {
	User.find()
	.then(users => {
		if (!users) {
			errors.nousers = "No users"
			return res.status(404).json(errors)
		}
		res.json(users)
	})
	.catch(err => res.status(404).json({ profile: 'There are no profiles' }));
});

module.exports = router;