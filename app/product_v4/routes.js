const express = require("express");
const router = express();
const { create, index, find, update, destroy } = require("./controller");

router.get("/products", index);
router.get("/product/:id", find);
router.put("/product/:id", update);
router.delete("/product/:id", destroy);
router.post("/products", create);

module.exports = router;
