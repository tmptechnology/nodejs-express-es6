import passport from "passport";
import passportLocal from "passport-local";
import {User} from "../models/user.model.js";

let LocalStrategy = passportLocal.Strategy;

passport.use(new LocalStrategy({
    usernameField: "username",
    passwordField: "password",
    passReqToCallback: true
}, async (req, username, password, done)=> {
    try {



        let user = await User.findOne({username:username});
        if (!user) {
            req.flash('error', 'Incorrect username.')
            return done(null, false);
        }
        let checkPassword = await(user.comparePassword(password));
        if (!checkPassword) {
            req.flash('error', 'Incorrect password.' )
            return done(null, false);
        }

        req.flash('error', 'Login success.' )
        return done(null, user);
    } catch (error) {
        console.log(error);
        return done(null, false);
    }
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

export default passport;