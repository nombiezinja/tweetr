const userHelper    = require("../lib/util/user-helper")

const express       = require('express');
const registrationRoutes  = express.Router();
const cookieSession = require('cookie-session');
const bodyParser    = require("body-parser");
const app           = express();

app.use(cookieSession({
  secret: 'I actually like iPhones.'
}));
app.use(bodyParser.urlencoded({ extended: true }));


module.exports = function(db, userHelper) {

  registrationRoutes.get("/", function(req, res) {
    if (err) {
      res.status(404).json({ error: err.message });
    } else {
      res.redirect("/");
    }
  });

  registrationRoutes.post("/", function(req, res) {
    console.log('hi');
    const email = req.body.email;
    const password = req.body.password;
    const profile = userHelper.generateRandomUser();
    const user = { email: email,
      password: password,
      profile: profile
    };
    console.log(user);
    db.collection("users").insert(user);
    req.session.userHandle = profile.handle;
    res.status(201).end();
  });

  return registrationRoutes;

}