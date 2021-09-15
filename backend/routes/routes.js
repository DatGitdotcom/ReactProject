const express = require('express');
const router = express.Router()
const singUpTempcopy = require('../models/SignUpModels')
const bcrypt = require('bcrypt')


// get all data
router.get('/usersList' , async (req, res) => {
    try{
        const postList = await singUpTempcopy.find()
        res.json(postList)

    }catch(err){
        res.json({message: err})

    }
})
// post data to db using model 
router.post('/signup' , async (req, res) => {

    const saltpass = await bcrypt.genSalt(10)
    const hashpass = await bcrypt.hash(req.body.password, saltpass)

      const signUpUser = new singUpTempcopy({
          fname: req.body.fname,
          lname: req.body.lname,
          username: req.body.username,
          email: req.body.email,
          password: hashpass
      })
      try{

        const signeduser = await signUpUser.save()
        res.json(signeduser)
      }catch(err){
        res.json({message : err})

      }
      
      })

      // get post by ID

  

      router.get('/:getUserByID' , async (req, res) => {
        try{
            const postListID = await singUpTempcopy.findById(req.params.getUserByID)
            res.json(postListID)
    
        }catch(err){
            res.json({message: err})
    
        }
    })
    // Delete by ID

    router.delete('/:UserDelete' , async (req, res) => {
        try{
      const removeUser = await singUpTempcopy.remove({_id: req.params.UserDelete})
      res.json(removeUser)

        }catch(err){
            res.json({message: err})
        }
    })

    // update a user 
    router.patch('/:UserUpdate' , async (req, res) => {
        try{
      const updateUser = await singUpTempcopy.remove({_id: req.params.UserUpdate} ,
         {$set: { fname: req.body.fname}
      })
      res.json(updateUser)

        }catch(err){
            res.json({message: err})
        }
    })

    

module.exports = router