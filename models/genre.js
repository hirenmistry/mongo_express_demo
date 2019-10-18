var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
  {
    name : {type:String, required: true, minlength: 3, maxlength:100 }    
  }
);

// Virtual for genre's URL
GenreSchema
.virtual('url')
.get(function () {
  return '/catalog/genre/' + this._id;
});

// Virtual for genre name URL
GenreSchema
.virtual('name_url')
.get(function () {
  return '/catalog/genre/' + this.name;
});

//Export model
module.exports = mongoose.model('Genre', GenreSchema);