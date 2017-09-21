var mongoose = require('mongoose');

// Video Schema
var videoSchema = mongoose.Schema({
  title: {type: String, required: true},
  upload_date: {type: Date, default: Date.now},
  duration: {type: String},
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

var Video = module.export = mongoose.model('Video', videoSchema);

// Get videos
module.exports.getVideos = function(callback, limit) {
  Video.find(callback).limit(limit);
}

// Get Selected Video by ID
module.exports.getVideoById = function(id, callback) {
  Video.findById(id, callback);
}

// Add new Video
module.exports.addVideo = function(video, callback) {
  Video.create(video, callback);
}

// Update Video
module.exports.updateVideo = function(id, video, options, callback) {
  var query = {_id: id};
  var update = {
    title: video.title,
    duration: video.duration,
    device: video.device,
    coordinates: video.coordinates,
    description: video.description,
    url: video.url
  }
  Video.findOneAndUpdate(query, update, options, callback);
}

// Delete Video
module.exports.deleteVideo = function(id, callback) {
  var query = {_id: id};
  Video.remove(query, callback);
}
