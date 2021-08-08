const express = require("express")
const router = express.Router()

router.get("/",  (req, res) => {
  res.send("HTTP POST request for rich menu")
});

module.exports = router