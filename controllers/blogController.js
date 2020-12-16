//Route handlers for blogs
const fs = require("fs");
const path = require("path");
const Blog = require("../models/Blog");
const AppError = require("../helpers/appErrorClass");
const sendResponse = require("../helpers/sendResponse");
const sendErrorMessage = require("../helpers/sendError");
const fileName = path.join(__dirname, "../data", "blogs.json");
const blogs = JSON.parse(fs.readFileSync(fileName, "utf-8"));

const getAllBlogs = (req, res, next) => {
  sendResponse(200, "Sucessful", blogs, req, res);
};

module.exports.getAllBlogs = getAllBlogs;
