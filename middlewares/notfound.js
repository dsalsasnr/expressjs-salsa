const { StatusCodes } = require("http-status-codes");

const notFoundMiddleware = (req, res, next) => {
  res.status(StatusCodes.NOT_FOUND).json({
    error: "Route not found",
  });
};

module.exports = notFoundMiddleware;
