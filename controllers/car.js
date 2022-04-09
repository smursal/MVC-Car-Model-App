const pool = require("../models/index");
const carController = {};

carController.getAllPosts = function (req, res, next) {
  // get all posts from database
  // Replace sahmie in Blackforcesahmie with your fullname - no spaces
  pool.query("SELECT * FROM BlackforceprojectSagal1", (error, results) => {
    if (error) {
      throw error;
    }
    return res.render("car", { carPosts: results.rows });
  });
};

carController.createAPost = function (req, res, next) {
  // req.body
  let manufacturer = req.body.manufacturer;
  let model = req.body.model;
  let color = req.body.color;
  let year = req.body.year;

  // Replace sahmie in Sagal with your fullname - no spaces
  pool.query(
    `INSERT INTO BlackforceprojectSagal1 (manufacturer, model, color, year) VALUES ($1 , $2, $3, $4)`,
    [manufacturer, model, color, year],
    (error, results) => {
      console.log(results);
      if (error) {
        throw error;
      }
      return res.render("car", { carPosts: [] });
    }
  );
};

carController.deleteAPost = function (req, res, next) {
  // get resource id

  const id = req.params.id;

  // Replace sahmie in Sagal with your fullname - no spaces
  pool.query(
    "DELETE FROM BlackforceprojectSagal1 WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      return res.render("car", { carPosts: [] });
    }
  );
};

carController.editAPost = function (req, res, next) {
  const id = req.params.id;

  pool.query(
    "SELECT * FROM BlackforceprojectSagal1 WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.render("carEdit", { carPost: results.rows[0] });
    }
  );
};
carController.updateAPost = function (req, res, next) {
  const id = req.params.id;

  let manufacturer = req.body.manufacturer;
  let model = req.body.model;
  let color = req.body.color;
  let year = req.body.year;

  pool.query(
    "UPDATE BlackforceprojectSagal1 SET manufacturer = $1, model = $2, color = $3, year = $4   WHERE id = $5",
    [manufacturer, model, color, year, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.redirect("/car");
    }
  );
};

module.exports = carController;
