var express = require("express");
var router = express.Router();
const userModel = require("./users");
const session = require("express-session");

/* GET home page. */
// router.get("/", function (req, res) {
//   res.render("index");
// });

//CRUD Opertion is start

//This type code is asyncronus is liya isme await and async ka rule setup kare

/* Create the Db*/
// router.get("/create", async function (req, res) {
//   const createduser = await userModel.create({
//     username: "Aman",
//     age: 22,
//     name: "Aman",
//   });
//   res.send(createduser);
// });

/* Find / reading  the Data*/
// router.get("/allusers",async function (req, res) {
//   //find all user
//   let allusers = await userModel.find();

//   //find one user
//   let allusers = await userModel.findOne({username:"Aman"});
//   res.send(allusers);
// });

// delete the data in db
// router.get("/delete", async function (req, res) {
//   let deleteuser = await userModel.findOneAndDelete({
//     username: "Aman",
//   });
//   res.send(deleteuser);
// });

/*Create the session*/
//Declaration the session
router.get("/", function (req, res) {
  req.session.Koibhiname = true;
  res.render("index");
});

//Read the session
router.get("/cheakban", function (req, res) {
  if (req.session.Koibhiname === true) {
    res.send("You are banned");
  } else {
    res.send("not banned");
  }
});

//Delete the session
router.get("/removeban", function (req, res) {
  req.session.destroy(function (err) {
    if (err) throw err;
    res.send("Ban removed");
  });
});

module.exports = router;
