const express = require('express');
const router = express.Router()
const singUpTempcopy = require('../models/SignUpModels')



router.post('/signup' , (req, res) => {

      const signUpUser = new singUpTempcopy({
          fname: req.body.fname,
          lname: req.body.lname,
          username: req.body.username,
          email: req.body.email,
          password: req.body.password
      })
      signUpUser.save()
      .then(data =>{
          res.json(data)
      })
      .catch(err =>{
          res.json(err)
      })
} )

module.exports = router