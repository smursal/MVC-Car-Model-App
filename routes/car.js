var express = require("express");
var router = express.Router();

var carController = require("../controllers/car");
/* GET home page. */
router.get("/", carController.getAllPosts);

router.post("/", carController.createAPost);

router.get("/:id/delete", carController.deleteAPost);

router.get("/:id/edit", carController.editAPost);

router.post("/:id/edit", carController.updateAPost);
// http://localhost:3000/blog/1/delete

// get post delete
// delete
// update

module.exports = router;
