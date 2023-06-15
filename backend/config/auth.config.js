require('dotenv').config();
module.exports = {
  secret: process.env.SECRET,
  tokenExpiration: 86400, // 24 hours
};
