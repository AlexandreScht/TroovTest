const config = require('../../config/auth.config');
const User = require('../../model/user/user.model');


var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
  const { email,password,name } = req.body;
  
  try {
    const user = await User.findOne({ email: email }).exec();
    
    if (user) {
      return res.status(404).send({ message: true });
    }
  } catch (error) {
    return res.status(500).send({ message: 'Error: ' + error });
  }
  
  // create new user
  const hashedPassword = await bcrypt.hash(password, 8);

    const user = new User({
      email: email.toLowerCase(),
      password: hashedPassword,
      name,
    });

    await user.save();
    res.status(201).json({ message: "User created" });
  }

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
