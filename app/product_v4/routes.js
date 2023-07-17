const router = require("express").Router();
const multer = require("multer");
const upload = multer({ dest: "uploads" });
const Product = require("./model");
const fs = require("fs");
const path = require("path");

router.post("/product", upload.single("image"), async (req, res) => {
  const { name, price, stock, status } = req.body;
  const image = req.file;
  if (image) {
    const target = path.join(__dirname, "../../uploads", image.originalname);
    fs.renameSync(image.path, target);
  }

  try {
    const product = await Product.create({
      name,
      price,
      stock,
      status,
      image_url: image ? `http://localhost:3001/public/${image.originalname}` : undefined,
    });
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/product", async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/product/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/product/:id", upload.single("image"), async (req, res) => {
  const { id } = req.params;
  const { name, price, stock, status } = req.body;
  const image = req.file;
  if (image) {
    const target = path.join(__dirname, "../../uploads", image.originalname);
    fs.renameSync(image.path, target);
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        name,
        price,
        stock,
        status,
        image_url: image ? `http://localhost:3001/public/${image.originalname}` : undefined,
      },
      { new: true }
    );
    res.send(updatedProduct);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/product/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.send({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
