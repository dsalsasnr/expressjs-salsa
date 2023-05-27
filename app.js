const express = require("express");
const app = express();

const indexRouter = require("./task/index");
const htmlRouter = require("./task/html");
const jsonRouter = require("./task/json");

app.use(express.json());
app.use("/", indexRouter);
app.use("/html", htmlRouter);
app.use("/json", jsonRouter);

app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

app.listen(3000, () => {
  console.log("Server : http://localhost:3000");
});

// const express = require("express");
// const app = express();
// const router = require("./routes");
// const log = require("./middlewares/logger");

// app.use(log);
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(router);
// app.use((req, res, next) => {
//   res.send({
//     status: "failed",
//     message: "Resource" + req.originalURL + "  Not Found",
//   });
// });
// app.listen(3000, () => console.log("Server : http://localhost:3000"));
