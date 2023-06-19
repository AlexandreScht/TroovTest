const mongoose = require("mongoose");

const Object = mongoose.Schema({
  properties: Array,
  objectType: {
    name: String,
    picture: String,
  },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("Object", Object);

