const Entry = require(__dirname + '/Schemas/entry.js');
const add = (name, message, imglinks) => new Entry({name, message, imglinks}).save();
const findAll = () => Entry.find({}).exec();
const findWithUID = (uid) => UserFile.findOne({uid}).exec();
  
module.exports = {
  add,
  findAll,
};