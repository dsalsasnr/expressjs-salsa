const { ObjectId } = require("mongodb");
const db = require("../../config/mongodb");
const fs = require("fs");
const path = require("path");

const index = (req, res) => {
  db.collection("products")
    .find()
    .toArray()
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
};

const view = (req, res) => {
  const { id } = req.params;
  db.collection("products")
    .findOne({ _id: new ObjectId(id) })
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
};

const create = (req, res) => {
  const { name, price, stock, status } = req.body;
  const image = req.file;
  if (image) {
    const target = path.join(__dirname, "../../uploads", image.originalname);
    fs.renameSync(image.path, target);

    db.collection("products")
      .insertOne({ name, price, stock, status, image_url: `http://localhost:3001/public/${image.originalname}` })
      .then((result) => res.send(result))
      .catch((error) => res.send(error));
  }
};

const update = (req, res) => {
  const { id } = req.params;
  const { name, price, stock, status } = req.body;
  const image = req.file;
  if (image) {
    const target = path.join(__dirname, "../../uploads", image.originalname);
    fs.renameSync(image.path, target);
  }

  db.collection("products")
    .updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          name,
          price,
          stock,
          status,
          image_url: image ? `http://localhost:3001/public/${image.originalname}` : undefined,
        },
      }
    )
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
};

const destroy = (req, res) => {
  const { id } = req.params;
  db.collection("products")
    .deleteOne({ _id: new ObjectId(id) })
    .then(() => res.send({ message: "Product deleted successfully" }))
    .catch((error) => res.send(error));
};

module.exports = {
  index,
  view,
  create,
  update,
  destroy,
};
