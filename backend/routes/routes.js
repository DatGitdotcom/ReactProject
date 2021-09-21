const express = require('express');
const router = express.Router()
const singUpTempcopy = require('../models/SignUpModels')
const bcrypt = require('bcrypt')


// get record from DB
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
        const {password , ...data} = await signeduser.toJSON()
        res.json(data)

      }catch(err){
        res.json({message : err})

      }
      
      })

      // get record by ID

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

    router.patch('/Edit/:id', async (req, res ) => {
        try{
            const id = req.params.id;
            const updates = req.body;
            const options = {new: true};

            const result = await singUpTempcopy.findByIdAndUpdate(id, updates , options)


            res.json(result)
       

        }catch(err){
            res.json({message: err})
        }
    })

    router.post('/Login' , async (req, res) => {
        const user = await singUpTempcopy.FindOne({email :req.body.email})
        if (!user){
            res.status(404).send({
                message:'Invalid Credentials'
            })
        }
        if (!await bcrypt.compare(req.body.password, user.password) ){
            res.status(400).send({
                message:'Invalid Credentials'
            })
        }
        res.send(user)


        
    })
    

module.exports = router