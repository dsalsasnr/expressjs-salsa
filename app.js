require("./config/mongoose");
const express = require("express");
const path = require("path");
const app = express();
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//router
// const productRouterV3 = require("./app/product_v3/routes");
const productRouterV4 = require("./app/product_v4/routes");
const handleErrorMiddleware = require("./middlewares/handle-error");
const notFoundMiddleware = require("./middlewares/notfound");
const v4 = "/api/v4";

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "uploads")));
app.use(cookieParser());
// app.use("/api/v3", productRouterV3);
app.use(v4, productRouterV4);
// app.use("/api/v4", productRouterV4);

app.use(cors({ origin: "http://localhost:3003" }));
app.use(handleErrorMiddleware);
app.use(notFoundMiddleware);
app.use((req, res, next) => {
  res.status(404).send({
    status: "failed",
    message: "Resource" + req.originalURL + "  Not Found",
  });
});
app.listen(3001, () => console.log("Server : http://localhost:3001"));
