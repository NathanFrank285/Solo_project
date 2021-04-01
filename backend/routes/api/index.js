const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const searchRouter = require("./search.js");
const profileRouter = require("./profile.js");

router.use("/session", sessionRouter);
router.use("/users", usersRouter);
router.use("/search", searchRouter)
router.use("profile", profileRouter)

module.exports = router;
