const config = require('../../config/auth.config');
const User = require('../../model/user.model');


var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    const existingUser = await User.findOne({ email }).exec();

    if (existingUser) {

      return res.status(404).json({ message: true });
    }

    const token = jwt.sign({ email }, config.secret);
    const hashedPassword = await bcrypt.hash(password, 8);
    const user = new User({
      email: email.toLowerCase(),
      password: hashedPassword,
      confirmationCode: token,
      name,
    });

    await user.save();
    return res.status(201).json({ message: "User created" });
  } catch (error) {
    return res.status(500).json({ message: 'Error: ' + error });
  }
};


exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const person = await User.findOne({ email }).exec();

    if (!person) {
      return res.status(401).send({ message: 'Email or Password incorrect' });
    }

    const passwordIsValid = bcrypt.compareSync(password, person.password);

    if (!passwordIsValid) {
      return res.status(401).send({ message: 'Email or Password incorrect' });
    }

    const user = {
      name: person.name,
      email: person.email,
    };

    // send token with name and email of user
    const token = jwt.sign({ user }, config.secret, {
      expiresIn: config.tokenExpiration,
    });

    return res.status(200).send({ token });
  } catch (err) {
    return res.status(500).send({ message: 'Error: ' + err });
  }
};

exports.Authenticate = async (req, res, next) => {
  if (req.get('Authorization')) {
    const token = req.get('Authorization').replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ message: 'Error. Need a token' });
    }
    req.token = token;

    // Vif token is correct
    jwt.verify(token, config.secret, (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ message: 'Error bad token', err: err });
      } else {
        const date = new Date();
        if (decodedToken.exp > date) {
          return res.status(401).json({ message: 'Token expired' });
        } else {
          // recup token data
          const user = decodedToken.user;
          return res.status(200).json({ user });
        }
      }
    });
  } else {
    return res.status(401).json({ message: 'Error. Need a token' });
  }
};

