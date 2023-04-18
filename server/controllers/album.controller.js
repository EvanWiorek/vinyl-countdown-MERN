const { response, request } = require("express");
const { Album } = require("../models/album.model.js");

module.exports.getAllAlbums = (request, response) => {
  Album.find()
    .sort({ title: 1 })
    .then((albums) => response.status(200).json(albums))
    .catch((err) => response.status(400).json(err));
};

module.exports.getAlbum = (request, response) => {
  Album.findOne({ _id: request.params.id })
    .then((album) => response.status(200).json(album))
    .catch((err) => response.status(400).json(err));
};

module.exports.createAlbum = (request, response) => {
  const { title, artistName, owned, description, genres } = request.body;
  Album.create({
    title,
    artistName,
    owned,
    description,
    genres,
  })
    .then((album) => response.status(201).json(album))
    .catch((err) => response.status(400).json(err));
};

module.exports.updateAlbum = (request, response) => {
  Album.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedAlbum) => response.status(200).json(updatedAlbum))
    .catch((err) => {
      response.status(400).json(err);
    });
};

module.exports.deleteAlbum = (request, response) => {
  Album.deleteOne({ _id: request.params.id })
    .then((deleteConfirmation) => response.status(200).json(deleteConfirmation))
    .catch((err) => response.status(400).json(err));
};
