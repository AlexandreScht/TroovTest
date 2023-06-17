const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require('./user.model');
// db.object = require('./object/object.model');

// ['roles', 'users', 'recruiters', 'offers', 'messages', 'locations', 'fullprofiles', 'experiences',
// 'conversations', 'company_files.files', 'company_files.chunks', 'companies', 'careers', 'candidatures',
// 'candidatures_files.files', 'candidatures_files.chunks', 'candidats', 'candidats_files.files', 'candidats_files.chunks'];

db.USER = require('./user.model');
// db.OBJECT = require('./object/object.model');

module.exports = db;
