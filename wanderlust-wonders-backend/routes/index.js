const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const database = require("./queries");
const cors = require("cors");
const dotenv = require("dotenv");
const { generateToken } = require("../jwt/jwt");
const bcrypt = require("bcrypt");

dotenv.config();

app.disable("x-powered-by");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* GET home page. */
app.get("/", database.getCities);

/* These lines of code are defining the routes for handling the signup functionality of the
application. */
app.get("/signup", database.getSignUpPageImages);
app.get("/signup/users", database.getUsers);
app.post("/signup", database.createUser);

/* This code block is defining the routes and handling the login functionality for the application. */
app.get("/login", database.getLoginPageImages);
app.get("/login/users", database.getUsers);
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await database.getUserByEmail(email);
    const hashedUserPassword = user.password;

    if (user) {
      const passwordMatches = await bcrypt.compare(
        password,
        hashedUserPassword
      );
      if (passwordMatches) {
        const token = generateToken(user);
        res.status(200).json({ token });
      } else {
        res.status(401).json({ error: "Invalid passwords" });
      }
    } else {
      res.status(401).json({ error: "Such user doesn't exist" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

/* These lines of code are defining the routes for handling CRUD operations on the "favorites"
resource. */
app.delete("/favorites/:id", database.deleteFavorite);
app.delete("/favorites", database.deleteFavorites);
app.get("/favorites", database.getFavorites);
app.post("/favorites", database.createFavorite);

module.exports = app;
