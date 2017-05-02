const Entry = require(__dirname + '/Schemas/entry.js');
const add = (name, message, imgurlinks) => new Entry({name, message, imgurlinks}).save();
const findAll = () => Entry.find({}).exec();
const findWithUID = (uid) => UserFile.findOne({uid}).exec();
  
module.exports = {
  add,
  findAll,
};