const indexController = {};

indexController.getHome = function (req, res, next) {
  // simulate data model
  let pageName = "Welcome to Car Model!";
  let user = "Sagal";
  let time = new Date().toLocaleDateString();

  res.render("index", { pageName: pageName, user: user, time: time });
};

module.exports = indexController;
