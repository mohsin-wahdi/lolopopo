var express = require("express");
var router = express.Router();
const userModel = require("./users");

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index");
});

//CRUD Opertion is start

//Create
//This type code is asyncronus is liya isme await and async ka rule setup kare
router.get("/create", async function (req, res) {
  const createduser = await userModel.create({
    username: "Aman",
    age: 22,
    name: "Aman",
  });
  res.send(createduser);
});

module.exports = router;
