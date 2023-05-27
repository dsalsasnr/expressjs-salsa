const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const data = {
    nama: "Salsa",
    umur: 23,
    alamat: "Bandung",
    jurusan: "Teknik Telekomunikasi",
  };
  res.json(data);
});

module.exports = router;
