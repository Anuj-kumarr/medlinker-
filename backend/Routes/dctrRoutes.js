const express = require("express");
// const {
//   registerPatient,
//   allPatient,
// } = require("../controllers/patientControllers");
// const { protect } = require("../middleware/authMiddleware");
const {
    registerDctr, authDctr
}  = require("../controllers/dctrControllers");
const router = express.Router();

console.log("request come to patientRoutes");

// router.route("/").get(protect, allPatient);
router.route("/").post(registerDctr);
router.post("/login", authDctr);

module.exports = router;