const express = require("express");

const validate = require("../middlewares/validate");

const videoValidation = require("../validations/video.validation.js");
const videosController = require("../controllers/videos.controller.js");

const router = express.Router();

router.get('/videos',videosController.getVideos)
router.get('/videos/:videoId', videosController.getVideo)
router.post('/videos', videosController.addVideo)
// router.post('/videos',  videosController.addVideo)

router.patch('/videos/:videoId/votes', videosController.changeVotes)
router.patch('/videos/:videoId/views', videosController.changeViews)


    //hello 


module.exports = router;
