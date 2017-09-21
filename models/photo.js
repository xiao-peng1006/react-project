var mongoose = require('mongoose');

// Video Schema
var photoSchema = mongoose.Schema({
  title: {type: String, required: true},
  upload_date: {type: Date, default: Date.now},
  count: {type: Number},
  uploader: {type: String, required: true},
  device: {type: String},
  coordinates: {
    lat: Number,
    lng: Number
  },
  description: {type: String},
  url: {type: String, required: true},
  hit: {type: Number, default: 0}
});

var Photo = module.export = mongoose.model('Photo', photoSchema);

// Get videos
module.exports.getPhotos = function(callback, limit) {
  Photo.find(callback).limit(limit);
}

// Get Selected Photo by ID
module.exports.getPhotoById = function(id, callback) {
  Photo.findById(id, callback);
}

// Add new Photo
module.exports.addPhoto = function(photo, callback) {
  Photo.create(photo, callback);
}

// Update Photo
module.exports.updatePhoto = function(id, photo, options, callback) {
  var query = {_id: id};
  var update = {
    title: photo.title,
    count: photo.count,
    device: photo.device,
    coordinates: photo.coordinates,
    description: photo.description,
    url: photo.url
  }
  Photo.findOneAndUpdate(query, update, options, callback);
}

// Delete Photo
module.exports.deletePhoto = function(id, callback) {
  var query = {_id: id};
  Photo.remove(query, callback);
}
