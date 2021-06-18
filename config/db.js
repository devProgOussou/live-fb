const mongoose = require("mongoose");
mongoose.connect("mongodb://" + process.env.DB_USER_PASS + "/live-fb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
