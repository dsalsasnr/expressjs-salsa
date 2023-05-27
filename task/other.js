const express = require("express");
const router = express.Router();

router.get("/:category/:tag", (req, res) => {
  const { category, tag } = req.params;
  res.json({ category, tag });
});

module.exports = router;
