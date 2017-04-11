const Entry = require(__dirname + '/Schemas/entry.js');
const add = (name, message) => new Entry({name, message}).save();
const findAll = () => Entry.find({}).exec();
const findWithUID = (uid) => UserFile.findOne({uid}).exec();
  
module.exports = {
  add,
  findAll,
};