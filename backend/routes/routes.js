const express = require("express");
const router = express.Router();
const singUpTempcopy = require("../models/SignUpModels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

// get record from DB
router.get("/TestRoute", async (req, res) => {
  res.json("Route success");
});

router.get("/usersList", async (req, res) => {
  try {
    const postList = await singUpTempcopy.find();
    res.json(postList);
  } catch (err) {
    res.json({ message: err });
  }
});
// post data to db using model
router.post("/signup", async (req, res) => {
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

// get record by ID

router.get("/:getUserByID", async (req, res) => {
  try {
    const postListID = await singUpTempcopy.findById(req.params.getUserByID);
    res.json(postListID);
  } catch (err) {
    res.json({ message: err });
  }
});
// Delete by ID

router.delete("/:UserDelete", async (req, res) => {
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

router.patch("/Edit/:id", async (req, res) => {
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

// Logging user in

router.post("/Login", async (req, res) => {
  try {
    const user = await singUpTempcopy.findOne({ username: req.body.username });
    if (!user) {
      res.json({ status: "error", message: "UserName" });
    }
    if (!(await bcrypt.compare(req.body.password, user.password))) {
      res.json({ status: "error", message: "Password" });
    }
    const token = jwt.sign(
      { _id: user._id, username: user.username },
      process.env.MY_SECRET
    );

    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: 6 * 60 * 60 * 1000,
    });

    res.send({ message: "Logged in", token });
  } catch (err) {
    res.json({ message: err });
  }
});

// function to verify

const verify = (req, res, next) => {
  const auth = req.headers.authorization;
  if (auth) {
    const token = auth.split(" ")[1];

    jwt.verify(token, process.env.MY_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json("Token is not valid");
      }
      req.user = user;

      next();
    });
  } else {
    res.status(401).json("You are not authenticated");
  }
};

// Going to the user profile
router.post("/User", verify, async (req, res) => {
  const userID = req.user;
  try {
    const user = await singUpTempcopy.findOne({ _id: userID });
    const { password, ...data } = await user.toJSON();

    res.send(data);
  } catch (err) {
    const errror = handleError(err);

    res.status(401).json({ error: errror });
  }

  //Test route

  router.get("/TestRoute", async (req, res) => {
    res.json("Route success");
  });
});

 // Logging users out 

router.post("/Logout", async (req, res) => {
  res.cookie("jwt", "", { maxAge: 0 });
  res.send({ message: "Logged Out" });
});

module.exports = router;
