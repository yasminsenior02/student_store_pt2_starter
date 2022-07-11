const express = require("express");
const User = require("../models/user");
const { createUserJwt } = require("../utils/tokens");
const { requireAuthenticatedUser } = require("../middleware/security");
const router = express.Router();

router.post("/login", async (req, res, next) => {
  try {
    const user = await User.login(req.body);
    console.log(user);
    const token = createUserJwt(user);
    return res.status(200).json({ user, token });
  } catch (err) {
    next(err);
  }
});

router.post("/register", async (req, res, next) => {
  try {
    const user = await User.register({ ...req.body, isAdmin: false });
    console.log(user);
    const token = createUserJwt(user);

    return res.status(201).json({ user, token });
  } catch (err) {
    next(err);
  }
});

router.get("/me", requireAuthenticatedUser, async (req, res, next) => {
  try {
    const { email } = res.locals.user;
    const user = await User.fetchUserByEmail(email);
    const publicUser = User.makePublicUser(user);
    return res.status(200).json({ user: publicUser }); // wan to take the token to send to this request
    // turn it into a user in the database and can be used for the client
  } catch (err) {
    next(err);
  }
});
module.exports = router;
