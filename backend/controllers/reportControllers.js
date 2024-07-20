const asyncHandler = require("express-async-handler");
const Report = require("../Models/ReportModel");

const registerReport = asyncHandler(async (req, res) => {
    // console.log("yes it is callled");
  const { userId } = req.body;

  if (!userId ) {
    res.status(400);
    throw new Error("enter the user id");
  }
   
  const userExists = await Report.findOne({ userId});

  if (userExists) {
       res.json(userExists);
  }
  else{
  const user = await Report.create({
    userId,
  });
//   console.log(user);

  if (user) {
    res.status(201).json({
      userId:userId,
    });

  } else {
    res.status(400);
    throw new Error("Unable to create");
  }

}
});

const updateReport = asyncHandler(async (req, res) => {
    // console.log("yes it is callled for updattion");
  const {patientId,pic,sender } = req.body;
//    console.log(patientId);
//    console.log(pic);
//    console.log(sender);
   let userId = patientId;
   if (!userId ) {
    res.status(400);
    throw new Error("enter the user id");
  }
   let updateData;
  const filter = { userId : userId};
   
    

  if (userId) {
   
     if(sender === "registration"){
        
        const updateOperation = {
            $set: {
                   Rreport:pic,
            }
          };
        //   console.log("hey");
         updateData = await Report.findOneAndUpdate(filter,updateOperation);
     }
     else if(sender === "BloodReport"){
        const updateOperation = {
            $set: {
                Bpreport:pic,
            }
          };
        updateData =await Report.findOneAndUpdate(filter,updateOperation);
     }
     else if(sender ==="UrineReport"){
        const updateOperation = {
            $set: {
                Ureport:pic,

            }
          };
        updateData =await Report.findOneAndUpdate(filter,updateOperation);
     }
     else if(sender ==="Xreport"){
        const updateOperation = {
            $set: {
                Xreport:pic,
            }
          };
        updateData =await Report.findOneAndUpdate(filter,updateOperation);
     }
     else if(sender ==="ECGReport"){
        const updateOperation = {
            $set: {
                ECGreport : pic,
            }
          };
        updateData =await Report.findOneAndUpdate(filter,updateOperation)
     }
     else if(sender ==="MRIReport"){
        const updateOperation = {
            $set: {
                MRIreport:pic,  
            }
          };
        updateData =await Report.findOneAndUpdate(filter,updateOperation)
     }

     
    //  console.log(updateData); 
  }
  else {
    res.status(400);
    throw new Error("Unable to create");
  }

}
);

const getReport = asyncHandler(async (req, res) => {
    // console.log("yes it is callled for getting");
  const {patientId,sender } = req.body;
//    console.log(patientId);
   
//    console.log(sender);
   let userId = patientId;
   if (!userId ) {
    res.status(400);
    throw new Error("enter the user id");
  }
   let updateData;
  const filter = { userId : userId};
   
    

  if (userId) {
   
     if(sender === "registration"){
        
         updateData = await Report.findOne(filter);
     }
     else if(sender === "BloodReport"){
       
        updateData =await Report.findOne(filter);
     }
     else if(sender ==="UrineReport"){
      
        updateData =await Report.findOne(filter);
     }
     else if(sender ==="Xreport"){
       
        updateData =await Report.findOne(filter);
     }
     else if(sender ==="ECGReport"){
        
        updateData =await Report.findOne(filter)
     }
     else if(sender ==="MRIReport"){
       
        updateData =await Report.findOne(filter)
     }
     else if(sender === "patient"){
         updateData = await Report.findOne(filter);
        //  console.log(updateData);
     }

     
    //  console.log(updateData); 
     res.json(updateData);
  }
  else {
    res.status(400);
    throw new Error("Unable to create");
  }

}
);




module.exports = {registerReport, updateReport ,getReport};