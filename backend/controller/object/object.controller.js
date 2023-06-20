const db = require('../../model');
const Object = db.object;
const User = db.user;

exports.getAll = async (req,res) => {
 try {
   const allObjects = await Object.find();

   if (allObjects?.length === 0) {
      
     return res.json({ data: null });
    }
    res.json({data: allObjects});
  } catch (error) {
    return res.status(500).send({ message: 'Internal server error' });
  }
};

exports.getOne = async (req,res) => {
  const id = req.params.id;

  try {
    const object = await Object.findOne({ _id: id }).exec();

    if (!object) {
      return res.status(401).send({ message: 'Incorrect ObjectId' });
    }

    res.json({ data: object });
  } catch (error) {
    return res.status(500).send({ message: 'Internal server error' });
  }
};

exports.create = async (req, res) => {
  const userId = req.userId;
  
  const { values,objectType,objectId } = req.body
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
      objectType,
      objectId
    });
    
    await object.save();
    return res.status(200).json({ message: 'Object created successfully' });
  } catch (error) {
    return res.status(500).send({ message: 'Internal server error' });
  }
};

exports.edit = async (req, res) => {
  const { values, id } = req.body;
  const properties = Array.isArray(values) ? values : [values];
  console.log(properties);
  try {
    const object = await Object.findOneAndUpdate({ _id: id }, { $set: { properties } }).exec();

    if (!object) {
      return res.status(401).send({ message: 'Incorrect ObjectId' });
    }

    res.json({ data: 'Object updated' });
  } catch (error) {
    return res.status(500).send({ message: 'Internal server error' });
  }
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const object = await Object.findByIdAndDelete(id).exec();

    if (!object) {
      return res.status(401).send({ message: 'Incorrect ObjectId' });
    }

    res.json({ data: 'Object deleted' });
  } catch (error) {
    return res.status(500).send({ message: 'Internal server error' });
  }
};