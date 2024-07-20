const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const dctrSchema = mongoose.Schema(
  {
    name: { type: "String", required: true },
    email: { type: "String", unique: true, required: true },
    phnumber:{type:"String",unique:true,required:true},
    password: { type: "String", required: true },
    Qualification:{type:"string"},
    mproficiency:{type:"string"},
    rating:{type:Number},
    pic: {
      type: "String",
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestaps: true }
);

dctrSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

dctrSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const Dctr = mongoose.model("Dctr", dctrSchema);

module.exports = Dctr;
// install bcryptjs 