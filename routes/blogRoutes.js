const express = require("express");
const { getAllBlogs } = require("../controllers/blogController");

const router = express.Router();

//End points
router.route("/blogs").get(getAllBlogs);

module.exports = router;
