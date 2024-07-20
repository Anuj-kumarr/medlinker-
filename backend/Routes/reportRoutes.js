const express = require("express");

const { registerReport,updateReport,getReport }  = require("../controllers/reportControllers");
const router = express.Router();

console.log("request come to MedRoutes");


router.route("/").post(registerReport);
router.post("/update",updateReport);
router.post("/view",getReport);


module.exports = router;