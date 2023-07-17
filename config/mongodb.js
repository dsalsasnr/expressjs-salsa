const { MongoClient } = require("mongodb");

const url = "mongodb://eduwork:salsa123@127.0.0.1:27017?authSource=admin";
const client = new MongoClient(url);

(async () => {
  try {
    await client.connect();
    console.log("koneksi ke mongodb berhasil");
  } catch (e) {
    console.log(e);
  }
})();

const db = client.db("eduwork-latihan");
module.exports = db;
