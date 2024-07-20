const asyncHandler = require("express-async-handler");
// const User = require("../Models/userModel");

const generateToken = require("../config/generateToken");

const Dctr = require("../Models/DctrModel");

const registerDctr = asyncHandler(async (req, res) => {
    console.log("yes it is callled");
  const { name, email,phnumber,password, pic,qualification ,mproficiency } = req.body;

  if (!name || !email || !password ) {
    res.status(400);
    throw new Error("Please Enter all the Feilds");
  }
   
  const userExists = await Dctr.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const rating = 1400;

  const user = await Dctr.create({
    name,
    email,
    phnumber,
    password,
    rating,
    pic,
    qualification,
    mproficiency,
    

  });
  console.log(user);

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      age:user.age,
      sex:user.sex,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

const authDctr = asyncHandler(async (req, res) => {
    console.log("request aa gyii ");
    const { email, password } = req.body;
  
    const user = await Dctr.findOne({ email });
  
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        pic: user.pic,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error("Invalid Email or Password");
    }
  });


module.exports = { registerDctr, authDctr};