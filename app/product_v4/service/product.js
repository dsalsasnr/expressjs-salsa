const Products = require("../model");
const { BadRequestError, NotFoundError } = require("../../../error");

const getAllProducts = async () => {
  const result = await Products.find();

  return result;
};

const createProducts = async (req) => {
  const { name, price, stock, status } = req.body;

  const check = await Products.findOne({ name });

  if (check) throw new BadRequestError("kategori nama duplikat");

  const result = await Products.create({ name, price, stock, status });

  return result;
};

const getOneProducts = async (req) => {
  const { id } = req.params;

  const result = await Products.findOne({ _id: id });

  if (!result) throw new NotFoundError(`Tidak ada Kategori dengan id :  ${id}`);

  return result;
};

const updateProducts = async (req) => {
  const { id } = req.params;
  const { name } = req.body;

  const check = await Products.findOne({
    name,
    _id: { $ne: id },
  });

  if (check) throw new BadRequestError("kategori nama duplikat");

  const result = await Products.findOneAndUpdate({ _id: id }, { name }, { new: true, runValidators: true });

  if (!result) throw new NotFoundError(`Tidak ada Kategori dengan id :  ${id}`);

  return result;
};

const deleteProducts = async (req) => {
  const { id } = req.params;

  const result = await Products.findOne({
    _id: id,
  });

  if (!result) throw new NotFoundError(`Tidak ada Kategori dengan id :  ${id}`);

  await result.remove();

  return result;
};

module.exports = {
  getAllProducts,
  createProducts,
  getOneProducts,
  updateProducts,
  deleteProducts,
};
