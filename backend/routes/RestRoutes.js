const express = require("express");
const router = express.Router();
const singUpTempcopy = require("../models/SignUpModels");
const bcrypt = require("bcrypt");


// getList


router.get("/", async (req, res) => {
  try {
    const postList = await singUpTempcopy.find();
    res.json(postList);
 
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// post data to db using model
router.post("/", async (req, res) => {
  const saltpass = await bcrypt.genSalt(10);
  const hashpass = await bcrypt.hash(req.body.password, saltpass);

  const signUpUser = new singUpTempcopy({
    fname: req.body.fname,
    lname: req.body.lname,
    username: req.body.username,
    email: req.body.email,
    password: hashpass,
  });
  try {
    const signeduser = await signUpUser.save();
    const { password, ...data } = await signeduser.toJSON();
    res.json(data);
  } catch (err) {
    res.json({ message: err });
  }
});

//getOne

router.get("/:ID", async (req, res) => {
  try {
    const postListID = await singUpTempcopy.findById(req.params.getUserByID);
    res.json(postListID);
  } catch (err) {
    res.json({ message: err });
  }
});
// Delete by ID

router.delete("/:ID", async (req, res) => {
  try {
    const removeUser = await singUpTempcopy.remove({
      _id: req.params.UserDelete,
    });
    res.json(removeUser);
  } catch (err) {
    res.json({ message: err });
  }
});

// update a user

router.patch("/:ID", async (req, res) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const options = { new: true };

    const result = await singUpTempcopy.findByIdAndUpdate(id, updates, options);

    res.json(result);
  } catch (err) {
    res.json({ message: err });
  }
});


module.exports = router

/*
const dataProvider = {
    getList:    (resource, params) => Promise,
    getOne:     (resource, params) => Promise,
    getMany:    (resource, params) => Promise,
    getManyReference: (resource, params) => Promise,
    create:     (resource, params) => Promise,
    update:     (resource, params) => Promise,
    updateMany: (resource, params) => Promise,
    delete:     (resource, params) => Promise,
    deleteMany: (resource, params) => Promise,
}
*/