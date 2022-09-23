const express = require("express");
const router = express.Router();
const connection = require("../Library/database_connection");
const adminController = require("../Controllers/admin-controller");


router.get("/", (req, res) => {
    try {
      connection.query("SELECT * FROM Careers", (err, result) => {
        if (err) throw err;
        res.send(result);
      });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  });
  
  //Getting all the careers by id
  router.get("/:id", (req, res) => {
    try {
      connection.query(
        `SELECT * FROM Careers WHERE id=${req.params.id}`,
        (err, result) => {
          if (err) throw err;
          res.send(result);
        }
      );
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  });

  //Adding a new career into the db
router.post("/", (req, res) => {
    return adminController.addCareer(req, res);
  });
  
  //Edit and Update by id
  router.put("/:id", (req, res) => {
    return adminController.editCareer(req, res);
  });
  
  //Delete product using id
  router.delete("/:id", (req, res) => {
    return adminController.deleteCareer(req, res);
  });
  
  module.exports = router;
