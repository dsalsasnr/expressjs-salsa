const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const content = `<h1>Selamat datang!</h1>
                   <p>Silakan pilih:</p>
                   <button><a href="/html">HTML</a></button>
                   <button><a href="/json">JSON</a></button>
                   <button><a href="/other">Other</a></button>`;
  res.send(content);
});

module.exports = router;
