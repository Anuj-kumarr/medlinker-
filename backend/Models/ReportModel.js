const mongoose = require("mongoose");

const RepoSchema = mongoose.Schema(
  {
    userId: {
        type: "String",
        required: true,
      },
      Rreport: {
      type: "String",

    },
    Bpreport: {
        type: "String",
  
      },
      Ureport: {
        type: "String",
  
      },
      Xreport: {
        type: "String",
  
      },
      ECGreport: {
        type: "String",
  
      },
      MRIreport: {
        type: "String",
  
      }, 
  }
);




const Report = mongoose.model("Report", RepoSchema);

module.exports = Report;
// install bcryptjs 