const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('user');
const jwt = require('jsonwebtoken');
const config = require('config');

// router.post('/signup',(req,res,next) =>...)...

router.post('/login',(req, res, next) => {
    User.find({ email: req.body.email})
        .exec()
        .then(user =>{
            if(user.length < 1) {
                return res.status(401).json({
                    message: "auth failed"
                })
            }
            bcrypt.compare(req.body.password,user[0].password,(err,result)=>{
                if(err){
                    return res.status(401).json({
                        message: "auth failed"
                    });
                }
                if(result){
                    const token = jwt.sign({_id: user._id }, config.get('jwtPrivateKey'));
                    res.send(token);
                    return res.status(200).json({
                        message: "auth successful"
                    });
                }
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
})