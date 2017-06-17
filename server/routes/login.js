//routes

const express       = require('express');
const loginRoutes  = express.Router();
const cookieSession = require('cookie-session');
const bodyParser    = require("body-parser");
const app           = express();

app.use(cookieSession({
  secret: 'I actually like iPhones.'
}));
app.use(bodyParser.urlencoded({ extended: true }));


module.exports = function(db) {

  loginRoutes.get("/", function(req, res) {
    if (err) {
      res.status(404).json({ error: err.message });
    } else {
      res.redirect("/");
    }
  });

  loginRoutes.post("/", function(req, res) {
    console.log('hi');
    const email = req.body.email;
    const password = req.body.password;
    db.collection("users").find({email : email}).toArray(function(err, users){
      if(err) {
        throw err;
      }
      if(!users[0]){
        res.status(404).send("You're bad >:(");
        return;
      }
      if(users[0].password === password) {
        req.session.userHandle = users[0].profile.handle;
        res.status(201).end();
      } else {
        res.status(401).send("That's a bad :0");
      }


    });


  });

  return loginRoutes;

}