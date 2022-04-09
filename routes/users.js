var express = require("express");
var router = express.Router();
const pool = require("../models/index");

// /* GET users listing. */
router.get("/", function (req, res, next) {
  pool.query(
    "SELECT * FROM BlackforceSahmie2022 ORDER BY id ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
  // res.send("This is a user route handler");
});

// create new user
// router.get("/", function (req, res, next) {
//   // get user details from req.body
//   pool.query(
//     `INSERT INTO BlackforceSahmie2022 (ID, NAME, AGE, GENDER, EMAIL) VALUES ('3', 'Samuel', 12, 'female', 'sam@gmail.com' ), ('4', 'Sahmie', 122, 'male', 'sahmie@gmail.com' )`,
//     (error, results) => {
//       console.log(results);
//       if (error) {
//         throw error;
//       }
//       res.status(201).send(`User added with ID: ${results.rows}`);
//     }
//   );
// });

// get user by id
// router.get("/:id", function (req, res) {
//   // const id = parseInt(request.params.id);
//   const id = 2;

//   pool.query(
//     "SELECT * FROM BlackforceSahmie2022 WHERE id = $1",
//     [id],
//     (error, results) => {
//       if (error) {
//         throw error;
//       }
//       res.status(200).json(results.rows);
//     }
//   );
// });

// update a user
// router.get("/:id", function (req, res) {
//   // const id = parseInt(request.params.id)
//   // const { name, email } = request.body

//   const id = 2;
//   const name = "new Sahmie";
//   const email = "new email";

//   pool.query(
//     "UPDATE BlackforceSahmie2022 SET name = $1, email = $2 WHERE id = $3",
//     [name, email, id],
//     (error, results) => {
//       if (error) {
//         throw error;
//       }
//       res.status(200).send(`User modified with ID: ${id}`);
//     }
//   );
// });

// delete a user
// router.get("/:id", function (req, res) {
//   // const id = parseInt(request.params.id)
//   const id = 4;

//   pool.query(
//     "DELETE FROM BlackforceSahmie2022 WHERE id = $1",
//     [id],
//     (error, results) => {
//       if (error) {
//         throw error;
//       }
//       res.status(200).send(`User deleted with ID: ${id}`);
//     }
//   );
// });

module.exports = router;
