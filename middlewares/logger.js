const log = (req, res, next) => {
  console.log(new Date().toLocaleDateString(), "=>", req.method, req.originalURL);
  next();
};

module.exports = log;

// app.post("/cover", upload.single("image"), function (req, res, next) {
//     // req.file is the `avatar` file
//     // req.body will hold the text fields, if there were any
//   });
