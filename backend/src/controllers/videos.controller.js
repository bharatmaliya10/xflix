const catchAsync = require("../utils/catchAsync");
const videoServices = require("../services/videos.services.js");

const addVideo = catchAsync(async (req, res) => {
  const video = await videoServices.addVideo(req.body);
  res.status(201).send(video);
});

const getVideos = async (req, res) => {
  try {
    const title = req.query.title ? req.query.title : "";
    const contentRating = req.query.contentRating
      ? req.query.contentRating
      : "ALL";
    const genres = req.query.genres ? req.query.genres : "ALL";
    const sortBy = req.query.sortBy ? req.query.sortBy : "releaseDate";

    const videos = await videoServices.getVideos(
      title,
      contentRating,
      genres,
      sortBy
    );
    // res.status(200).send(videos)
    if (!videos.length) {
      res.status(404).json({ message: "No Videos Found" });
    } else {
      res.status(200).send({ videos: videos });
    }
  } catch (error) {
    console.log(error);
  }
};

const getVideo = catchAsync(async (req, res) => {
  const video = await videoServices.getVideo(req.params.videoId);
  res.status(200).send(video);
});

const changeViews = catchAsync(async (req, res) => {
  await videoServices.changeViews(req.params.videoId);
  res.status(204).send();
});

const changeVotes = catchAsync(async (req, res) => {
  await videoServices.changeVotes(
    req.params.videoId,
    req.body.vote,
    req.body.change
  );
  res.status(204).send();
});

module.exports = {
  getVideos,
  getVideo,
  addVideo,
  changeVotes,
  changeViews,
};
