const bcrypt = require("bcryptjs");
const connection = require("../Library/database_connection");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//ADD NEW CAREERS, EDIT CAREERS + DELETE
async function addCareer(req, res) {
    const {
      title,
      description,
      image,
      entryLevel,
      overall,
      institutions,
      industry
    } = req.body;
  
    try {
      connection.query(
        `INSERT INTO Careers (title,
            description,
            image,
            entryLevel,
            overall,
            institutions,
            industry) VALUES ("${title}", "${description}", "${image}", "${entryLevel}", "${overall}", "${institutions}", "${industry}")`,
        (err, result) => {
          if (err) throw err;
          res.send(result);
        }
      );
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }
  
  async function editCareer(req, res) {
    const {
        title,
        description,
        image,
        entryLevel,
        overall,
        institutions,
        industry
    } = req.body;
  
    try {
      connection.query(
        `UPDATE Careers SET title = "${title}", description = "${description}", image = "${image}", entryLevel = "${entryLevel}", overall = "${overall}",institutions = "${institutions}", industry = "${industry}" WHERE id=${req.params.id}`,
        (err, result) => {
          if (err) throw err;
          res.send(result);
        }
      );
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }
  
  async function deleteCareer(req, res) {
    try {
      connection.query(
        `DELETE FROM Careers WHERE id=${req.params.id}`,
        (err, result) => {
          if (err) throw err;
          res.send(result);
        }
      );
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  module.exports = {
    addCareer,
  editCareer,
  deleteCareer,
  }