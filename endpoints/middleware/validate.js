const jwt = require("jsonwebtoken");
const decode_jwt = require("jwt-decode");
const crypt = require("bcryptjs");
const settings = require("../../config/settings");

/**
 * Generates a token from the given information.
 *
 * @param {Object}   user - User information
 * @param {string}   user.username - username of the user
 * @param {number}   user.id - id of the user form the database
 * @param {string[]} user.roles - roles the user currently has
 *
 * @returns {Object<string, string>}
 */
const generate_token = user => {
  //token settings
  const payload = {
    username: user.username,
    id: user.id,
    roles: user.roles,
  };
  //create user token
  const token = jwt.sign(payload, settings.token_secret);

  //return token
  return {token};
};

/**
 * Create token for user upon signup/login.
 *
 * If a user with the given username exists in the database, and the passwords match, this
 * function sets the user information to `req.user`, the token information to `req.token`,
 * and calls `next()`.
 *
 * If no user information is provided, or the user is not verified,
 * simply call `next()` without setting any information.
 *
 * @param {Object}              req - Express Request object.
 * @param {Object}              req.body - Body of data from web request.
 * @param {string}              req.body.username - Username from web request.
 * @param {string}              req.body.password - Password from web request.
 * @param {Object<string, any>} res - Express Response object.
 * @param {Function}            next - Express Next function.
 */
const user_model = require('../models/users')
const user = async (req, res, next) => {
  const {username, password} = req.body;
  //get user from database
  const user = await user_model.get_one({username: username});
  if (user && crypt.compareSync(password, user.password)) {
    //remove password from response
    delete user.password;
    delete req.body.password;
    //store user and token in the request
    req.user = user;
    req.token = generate_token(user);
  }
  next();
};

/**
 * Checks the user has a token and it's legit.
 *
 * If a user has a token passed in the request headers, this function verifies the jwt.
 * If the token is verified, sets the user info to `req.user` and calls `next()`.
 *
 * If no token is provided, or the token is not verified, responds with a `400`/`401` status.
 *
 * @param {Object}              req - Express Request object.
 * @param {Object}              req.headers - headers from web request.
 * @param {string}              req.headers.authorization - Authorization within the request headers.
 * @param {Object<string, any>} res - Express Response object.
 * @param {Function}            next - Express Next function.
 */
const token = async (req, res, next) => {
  //grab and check for jwt
  const webtoken = req.headers.authorization;
  webtoken
    ? //check if token is valid
      jwt.verify(webtoken, settings.token_secret, (err, decoded_token) => {
        if (err) {
          //if not, send an error
          res.status(401).json({
            message: `Nice try. This token hasn't been validated by the Citadel of Ricks.`,
          });
        } else {
          //otherwise move on
          req.user = decoded_token;
          next();
        }
      })
    : //send error if no token is provided
      res.status(404).json({message: `non-existant token cannot be validated`});
};

/**
 * Checks the user roles and only allows a user to pass if they have the admin role.
 *
 * REQUIRES the token function to be called before this function, as this needs
 * access to `req.user`.
 *
 * @param {Object}                 req - Express Request object.
 * @param {Object}                 req.user - User object created from `validate.token`.
 * @param {string[]}               req.user.roles - array of roles the logged in user has.
 * @param {Object<string, any>}    res - Express Response object.
 * @param {Function}               next - Express Next function.
 */

const admin = (req, res, next) => {
  if (!req.user.roles.includes("admin")) {
    res
      .status(403)
      .json({message: "You do not have permission to view this page."});
  } else next();
};

module.exports = {
    generate_token,
    user,
    token,
    admin,
  };