const mongoose = require("mongoose");


const medModel = mongoose.Schema(
  {
    nameP: { type: "String", required: true },
    emailP: { type: "String", required: true },
    phnumber:{type:"String",unique:true,required:true},
    problem:{type:"String",required:true},
     dctrtype:{type:"String",required:true},
     deciInfo:{type:"String",required:true},
     deciTime:{type:"String",required:true},
     serverity:{type:"String",required:true},
     prevDctr:{type:"String",required:true},
     nameD:{type:"String" ,required:true},
     emailD:{type:"String" ,required:true},
     pic:{
      type: "String",
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
     

    
    
    
  },
  { timestaps: true }
);




const Med = mongoose.model("Med", medModel);

module.exports = Med;
 // medical info of patient what type of problem , doctor he/she needs
