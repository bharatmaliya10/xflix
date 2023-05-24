const Joi = require("joi");
const customValidator   = require('./custom.validation.js')
const values = require('../utils/values.js')

const addVideo = {
    body:Joi.object().keys({
        title:Joi.string().required(),
        videoLink:Joi.string().required().custom(customValidator.videoLink),
        genre: Joi.string().required().valid(...values.genres),
        contentRating:Joi.string().required().valid(...values.contentRatings),
        releaseDate:Joi.string().required().custom(customValidator.releaseDate),
        previewImage:Joi.string().uri()
    })
}

const searchVideos = {
    query:Joi.object().keys({
        title:Joi.string(),
        genres: Joi.array().items(Joi.string().valid(...values.genres, "ALL")),
        contentRating:Joi.string().valid(...values.contentRatings, "ALL"),
        sortBy:Joi.string().valid(...values.sortBy)
    })
}

const updateVotes = {
    params:Joi.object().keys({
        videoId: Joi.required().custom(customValidator.objectId)
    }),
    body:Joi.object().keys({
        vote:Joi.string().required().valid(...values.updateVoteTypes),
        change:Joi.string().required().valid(...values.changeVoteTypes)
    })
}

const updateViews = {
    params:Joi.object().keys({
        videoId:Joi.required().custom(customValidator.objectId)
    }),
}

const getVideo = {
    params:Joi.object().keys({
        videoId:Joi.required().custom(customValidator.objectId)
    }),
}

module.exports= {
searchVideos,
getVideo,
addVideo,
updateVotes,
updateViews
}