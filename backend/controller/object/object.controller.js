const db = require('../../model');
const Object = db.object;
const User = db.user;

exports.create = async (req, res) => {
  const userId = req.userId;

  const { values,objectType } = req.body
  const properties = Array.isArray(values) ? values : [values]; 


  try {
    const user = await User.findOne({ _id: userId }).exec();

    if (!user) {
      return res.status(401).send({ message: 'Incorrect user id' });
    }

    if (properties?.length === 0) {
      return res.status(400).send({ message: 'Object data is required' });
    }
 
    const object = new Object({
      userId,
      properties,
      objectType
    });

    await object.save();
    return res.status(200).json({ message: 'Object created successfully' });
  } catch (error) {
    return res.status(500).send({ message: 'Internal server error' });
  }
};
