const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const blogRouter = require("./routes/blogRoutes");

const app = express();
app.use(express.json); //middleware
app.use("/blogs", blogRouter);

app.listen(
  process.env.PORT,
  console.log(`App started at port ${process.env.PORT}`)
);
