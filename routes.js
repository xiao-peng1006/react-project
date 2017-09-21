'use strict';

const express = require('express');
const fs = require('fs');
const Video = require("./models").Video;

const router = express.Router();

router.param('vID', (req, res, next, id) => {
  Video.findById(id, (err, doc) => {
    if (err) return next(err);
    if(!doc) {
      err = new Error('Video not found');
      err.status = 404;
      return next(err);
    }
    req.video = doc;
    next();
  });
})

router.get('/', (req, res) => {
  Video.find({}).exec((err, videos) => {
    if(err) return next(err);
    res.json(videos);
  });
});

router.get('/video/:vID', (req, res) => {
  const path = __dirname + '/src/videos/'+ req.video.url;
  const stat = fs.statSync(path);
  const fileSize = stat.size;
  const range = req.headers.range;
  if (range) {
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize-1;
    const chunkSize = (end-start)+1;
    const file = fs.createReadStream(path, {start, end});
    const headerInfo = {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunkSize,
      'Content-Type': 'video/mp4',
    }
    res.writeHead(206, headerInfo);
    file.pipe(res);
  } else {
    req.video.hit += 1;
    req.video.save((err, updatedVideo) => {
      if (err) return next(err);
    })
    const headerInfo = {
      'Content-Length': fileSize,
      'Content-Type': 'video/mp4',
    }
    res.writeHead(200, headerInfo);
    fs.createReadStream(path).pipe(res);
  }
});

router.post("/postvideo", (req, res, next) => {
	const video = new Video(req.body);
	video.save((err, video) => {
		if(err) return next(err);
		res.status(201);
		res.json(video);
	});
});

module.exports = router;
