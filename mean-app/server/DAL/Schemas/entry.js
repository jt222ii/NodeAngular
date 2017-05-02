const mongoose = require('mongoose');

let Schema = mongoose.Schema;
let entrySchema = new Schema({
  name: {type: String, required: true},
  message: {type: String, required: true},
  imgurlinks: [{type: String}],
});

let Model = mongoose.model('entry', entrySchema);

module.exports = Model;