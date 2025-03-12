const express = require("express");
const { signup, signin, getUserProfile, logout } = require("../controllers/userController");
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/signup", signup);  
router.post("/signin", signin);   
router.get("/profile", authMiddleware, getUserProfile);  
router.get("/profile/:id", authMiddleware, isAdmin, getUserProfile);  
router.post("/logout", authMiddleware, logout); 

module.exports = router;
