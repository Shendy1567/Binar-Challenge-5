const router = require("express").Router()

router.get("/game", require('./game'))
router.get("/", require('./landingpage'))
router.get("/login", require('./login'))
router.post("/login", require('./login'))

module.exports = router