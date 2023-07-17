const mongoose = require("mongoose");

mongoose.connect("mongodb://eduwork:salsa123@127.0.0.1:27017/eduwork-mongoose?authSource=admin", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => console.log("Server database terhubung"));
