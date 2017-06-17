"use strict";

// Basic express setup:

const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();
const MongoClient   = require("mongodb").MongoClient;
const MONGODB_URI   = "mongodb://localhost:27017/tweets";
const cookieSession = require('cookie-session');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieSession({
  secret: 'I actually like iPhones.'
}));


MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }

  console.log(`Connected to mongodb: ${MONGODB_URI}`);

  const DataHelpers = require("./lib/data-helpers.js")(db);
  const userHelpers = require("./lib/util/user-helper.js");
  const tweetsRoutes = require("./routes/tweets")(DataHelpers);
  const loginRoutes = require("./routes/login")(db);
  const registrationRoutes = require("./routes/registration")(db, userHelpers);

  // Mount routes to path:
  app.use("/tweets", tweetsRoutes);
  app.use("/register", registrationRoutes);
  app.use("/login", loginRoutes);
});

app.listen(PORT, () => {
  console.log("IT'S ALIIIIIIIIIIIVE @ PORT " + PORT);
});