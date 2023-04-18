const AlbumController = require('../controllers/album.controller.js');


module.exports = function(app){
  app.get('/api/albums', AlbumController.getAllAlbums);
  app.get('/api/album/:id', AlbumController.getAlbum);
  app.post('/api/newalbum', AlbumController.createAlbum);
  app.put('/api/album/:id', AlbumController.updateAlbum);
  app.delete('/api/album/:id', AlbumController.deleteAlbum);
}