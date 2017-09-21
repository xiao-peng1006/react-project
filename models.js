'use strict';

const mongoose = require('mongoose');

const videoSchema = mongoose.Schema({
  category: String,
  title: String,
  upload_date: { type: Date, default: Date.now },
  uploader: String,
  device: String,
  coordinates: {
    lat: Number,
    lng: Number,
  },
  description: String,
  url: String,
  hit: Number
});

const Video = mongoose.model('Video', videoSchema);

module.exports.Video = Video;
