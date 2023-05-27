const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h2>Ini adalah data HTML</h2>");
});

module.exports = router;
