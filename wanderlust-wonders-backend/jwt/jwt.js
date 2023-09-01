const jwt = require("jsonwebtoken");

/**
 * The function `getUserId` extracts the user ID from the authorization token in the request headers.
 * @param request - The `request` parameter is an object that represents the HTTP request being made.
 * It typically contains information such as the request headers, body, and other metadata. In this
 * case, the `request` object is expected to have a `headers` property, which is an object containing
 * the request headers.
 * @returns The function `getUsesrId` returns the `uerID` extracted from the decoded token.
 */
const getUserId = (request) => {
  const token = request.headers.authorization.replace("Bearer ", "");
  const decoded = jwt.verify(token, process.env.SECRET_KEY);
  const userID = decoded.id;
  return userID;
};

/**
 * The function `generateToken` generates a JSON Web Token (JWT) with an email and user ID payload,
 * using a secret key and an expiration time of 1 hour.
 * @param email - The email parameter is the email address of the user for whom the token is being
 * generated.
 * @param user - The `user` parameter is an object that represents the user for whom the token is being
 * generated. It likely contains properties such as `id`, `name`, `username`, etc.
 * @returns a token generated using the `jwt.sign` method.
 */
const generateToken = (user) => {
  const payload = { email: user.email, password: user.password, id: user.id };
  const options = { expiresIn: "1h" };
  const secretKey = process.env.SECRET_KEY;
  const token = jwt.sign(payload, secretKey, options);
  return token;
};

module.exports = {
  getUserId,
  generateToken,
};
