const db = require("../database/db");
const { getUserId } = require("../jwt/jwt");
const bcrypt = require("bcrypt");

const saltRounds = 10;

db.connect((err) => {
  if (err) throw err;
  console.log("PostgreSQL database has been connected...");
});

const getFavorites = (request, response) => {
  const userID = getUserId(request);
  db.query(
    "SELECT * FROM favorite_cities WHERE fk_user = $1 ORDER BY id ASC",
    [userID],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const createFavorite = (request, response) => {
  const { city, country, state } = request.body;
  const userID = getUserId(request);
  db.query(
    "INSERT INTO favorite_cities (city, country, state, fk_user) VALUES ($1, $2, $3, $4) RETURNING *",
    [city, country, state, userID],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`City added with ID: ${results.rows[0].id}`);
    }
  );
};

const createUser = async (request, response) => {
  const { email, password } = request.body;
  try {
    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    
    // Store the user in the database with the hashed password
    db.query(
      "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
      [email, hashedPassword],
      (error, results) => {
        if (error) {
          throw error;
        }
        response
          .status(201)
          .send(`User signed up with ID: ${results.rows[0].id}`);
      }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    response.status(500).send("An error occurred while signing up.");
  }
};

// Fetching a list of users

const getUsers = (request, response) => {
  db.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getUserByEmail = async (email) => {
  const result = await db.query("SELECT * from users WHERE email = $1", [
    email,
  ]);

  if (result.rows.length === 0) {
    throw new Error("User not found");
  }

  return result.rows[0];
};

const deleteFavorite = (request, response) => {
  const id = parseInt(request.params.id);
  const userID = getUserId(request);
  db.query(
    "DELETE FROM favorite_cities WHERE id = $1 AND fk_user = $2",
    [id, userID],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`City deleted with ID: ${id}`);
    }
  );
};

const deleteFavorites = (request, response) => {
  const userID = getUserId(request);
  db.query(
    "DELETE FROM favorite_cities WHERE fk_user = $1",
    [userID],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Cities deleted`);
    }
  );
};

// Fetching a list of cities to display on homepage
const getCities = (request, response) => {
  db.query("SELECT * FROM cities ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

// Fetching a list of images to display on login page
const getLoginPageImages = (request, response) => {
  db.query(
    "SELECT * FROM login_carousel_images ORDER BY id ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

// Fetching a list of images to display on sign up page
const getSignUpPageImages = (request, response) => {
  db.query(
    "SELECT * FROM sign_up_carousel_images ORDER BY id ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

module.exports = {
  getFavorites,
  deleteFavorite,
  deleteFavorites,
  createFavorite,
  createUser,
  getCities,
  getUserByEmail,
  getUsers,
  getLoginPageImages,
  getSignUpPageImages,
};
