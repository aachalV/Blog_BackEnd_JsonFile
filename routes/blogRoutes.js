const express = require("express");
const {
  getAllBlogs,
  isIdValid,
  getBlogById,
} = require("../controllers/blogController");

const router = express.Router();

//End points
router.route("/blogs").get(getAllBlogs);
router.route("/blogs/:id").get(isIdValid, getBlogById);

module.exports = router;
