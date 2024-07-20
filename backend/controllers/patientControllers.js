const asyncHandler = require("express-async-handler");
// const User = require("../Models/userModel");

const generateToken = require("../config/generateToken");
const Patient = require("../Models/userModel");

//@description     Get or Search all users
//@route           GET /api/user?search=
//@access          Public
const allPatient = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const users = await Patient.find(keyword).find({ _id: { $ne: req.user._id } });
  res.send(users);
});

//@description     Register new user
//@route           POST /api/user/
//@access          Public
const registerPatient = asyncHandler(async (req, res) => {
    console.log("yes it is callled");
  const { name, email,phnumber,age,sex,password, pic } = req.body;

  if (!name || !email || !password ) {
    res.status(400);
    throw new Error("Please Enter all the Feilds");
  }
   
  const userExists = await Patient.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await Patient.create({
    name,
    email,
    phnumber,
    age,
    sex,
    password,
    pic,
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

//@description     Auth the user
//@route           POST /api/users/login
//@access          Public
const authPatient = asyncHandler(async (req, res) => {
  console.log("request aa gyii ");
  const { email, password } = req.body;

  const user = await Patient.findOne({ email });

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

module.exports = { allPatient, registerPatient, authPatient };
// install npm i express-async-handler 
