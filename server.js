const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config/.env" });
require("./config/db");
const postRoutes = require("./routes/post.routes");

//midlleware
app.use(express.json());
app.use(express.urlencoded({ extends: true }));
app.use(cors());

//routes
app.use("/api", postRoutes);

//server
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
