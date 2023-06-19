const config = require('../../config/auth.config');
const db = require('../../model');
const User = db.user;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

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
      id: person._id,
      name: person.name,
    };

    // send token with name and email of user
    const token = jwt.sign({ user }, config.secret, {
      expiresIn: config.tokenExpiration,
    });

    return res.send({ token });
  } catch (err) {
    return res.status(500).send({ message: 'Error: ' + err });
  }
};

exports.currentUser = async (req, res) => {
  const userId = req.userId;

  try{
    const getUser = await User.findOne({ _id: userId }).exec();

    if (!getUser) {
      return res.status(401).send({ message: 'Incorrect user id' });
    }

    const user = {
      id: getUser._id,
      name: getUser.name,
      email: getUser.email
    } 

    return res.send({ user });
  } catch (err) {
    return res.status(500).send({ message: 'Error: ' + err });
  }
};



