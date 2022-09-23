const express = require("express");
const router = express.Router();
const connection = require("../Library/database_connection");
const adminController = require("../Controllers/admin-controller.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");