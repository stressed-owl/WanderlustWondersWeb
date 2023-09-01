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

/* GET images for login page */
app.get("/login", database.getLoginPageImages);

/* GET users for login page */
app.get("/login/users", database.getUsers);

app.get("/signup", database.getSignUpPageImages);
app.get("/signup/users", database.getUsers);
app.get("/favorites", database.getFavorites);

app.post("/signup", database.createUser);
app.post("/favorites", database.createFavorite);

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

app.delete("/favorites/:id", database.deleteFavorite);
app.delete("/favorites", database.deleteFavorites);

module.exports = app;
