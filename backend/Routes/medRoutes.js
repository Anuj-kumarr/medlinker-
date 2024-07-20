const express = require("express");

const {
    medRegistration, authReq, authIdMed
}  = require("../controllers/medControllers");
const router = express.Router();

console.log("request come to MedRoutes");


router.route("/").post(medRegistration);
router.post("/req", authReq);
router.post("/id",authIdMed);


module.exports = router;