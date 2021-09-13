const express = require('express');
const router = express.Router()
const singUpTempcopy = require('../models/SignUpModels')



router.post('/signup' , (req, res) => {

      const signUpUser = new singUpTempcopy({
          fname: req.body.fname,
          lname: req.body.fname,
          username: req.body.fname,
          email: req.body.fname,
          password: req.body.fname
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