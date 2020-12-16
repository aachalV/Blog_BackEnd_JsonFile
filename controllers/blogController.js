//Route handlers for blogs
const fs = require("fs");
const path = require("path");
const Blog = require("../models/Blog");
const AppError = require("../helpers/appErrorClass");
const sendResponse = require("../helpers/sendResponse");
const sendErrorMessage = require("../helpers/sendError");
const fileName = path.join(__dirname, "../data", "blogs.json");
const blogs = JSON.parse(fs.readFileSync(fileName, "utf-8"));

//Get All Blogs
const getAllBlogs = (req, res, next) => {
  sendResponse(200, "Sucessful", blogs, req, res);
};
//Check Id
const isIdValid = (req, res, next) => {
  console.log("Enterd IsVAlid");
  let id = req.params.id;
  let idExists = blogs.some((blog) => {
    return blog.id == id;
  });
  if (!idExists) {
    return sendErrorMessage(
      new AppError(
        400,
        "Unsuccessful",
        "Request Body Invalid Input...Id doesn't exists"
      ),
      req,
      res
    );
  } else {
    next();
  }
};
//Get Blog by Id
const getBlogById = (req, res, next) => {
  let id = req.params.id;
  let blog = blogs.find((blog) => {
    return blog.id == id;
  });
  sendResponse(200, "Successfull", blog, req, res);
};

module.exports.getAllBlogs = getAllBlogs;
module.exports.isIdValid = isIdValid;
module.exports.getBlogById = getBlogById;
