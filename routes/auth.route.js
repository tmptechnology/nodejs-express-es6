import express from 'express';
import initPassportLocal from "../services/auth.service.js";

const router = express.Router()

/* Auth Logic */ 
const passport = initPassportLocal

/* GET users listing. */
router.get('/login', function(req, res, next) {
 
  let message = req.flash();
  console.log(message)
  res.render('login', {
    message: message,
  });
});

router.post('/login/password', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/auth/login',
  failureMessage: true
}));

router.get('/logout', function(req, res, next) {
  req.logout();
  res.redirect('/');
});

export default router;
