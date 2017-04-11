const mongoose = require('mongoose');

let Schema = mongoose.Schema;
let entrySchema = new Schema({
  name: {type: String, required: true},
  message: {type: String, required: true},
});

let Model = mongoose.model('entry', entrySchema);

module.exports = Model;