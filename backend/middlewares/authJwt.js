const jwt = require('jsonwebtoken');
const config = require('../config/auth.config');

exports.Authenticate = async (req, res, next) => {
  if (req.get('Authorization')) {
    const token = req.get('Authorization').replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({ message: 'Error. Need a token' });
    }

    // check if token is valid
    jwt.verify(token, config.secret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: 'Error bad token', err: err });
      }
      const date = new Date();
      
      if (decodedToken.exp > date) {
        res.status(401).json({ message: 'Token expired' });
      }

      req.userId = decodedToken.user.id;

      return next();
    });
  } else {
    return res.status(401).json({ message: 'Error. Need a token' });
  }
};

