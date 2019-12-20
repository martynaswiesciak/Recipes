
const bcrypt = require('bcrypt');
const {User, validate} = require('../models/user');
const mongoose = require('mongoose');
const expres = require('express');
const router = express.Router();

// user registration
router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send('User already registered.');

    user = new User({
        email: req.body.email,
        nick: req.body.nick,
        name: req.body.name,
        surname: req.body.surname,
        password: req.body.password
    });
    // password hashing 
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();
            
    res.send(user);
});

module.exports = router;