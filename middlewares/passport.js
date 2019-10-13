const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const appModel = require("../model/app.model");
passport.use(
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password"
    },
    function(username, password, cb) {
      //this one is typically a DB call. Assume that the returned user object is pre-formatted and ready for storing in JWT
      return appModel
        .findOne(username)
        .then(rows => {
          if (!rows) {
            return cb(null, false, {
              message: "Incorrect username or password."
            });
          }
          if (password === rows[0].password) {
            var user = {username, password};
            return cb(null, user, { message: "Logged In Successfully" });
          }
          return cb(null, false, { message: "Invalid pass!!" });
        })
        .catch(err => cb(err));
    }
  )
);
