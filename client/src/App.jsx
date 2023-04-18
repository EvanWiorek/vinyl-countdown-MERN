import React, { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import AddAlbum from './views/AddAlbum';
import Update from './views/Update';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Detail from "./views/Detail";
import "./App.css";

function App() {
  const [albums, setAlbums] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState([]);

  const removeFromDom = (albumId) => {
    setAlbums(albums.filter((album) => album._id != albumId));
  };

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route element={<Home albums={albums} setAlbums={setAlbums} loaded={loaded} setLoaded={setLoaded} removeFromDom={removeFromDom} />} path="/" />
        <Route element={<AddAlbum albums={albums} setAlbums={setAlbums} loaded={loaded} setLoaded={setLoaded} errors={errors} setErrors={setErrors} />} path="/newalbum/" />
        <Route element={<Detail/>} path="/album/:id" />
        <Route element={<Update errors={errors} setErrors={setErrors} />} path="/album/:id/edit/" />
      </Routes>
    </div>
  );
}
export default App;
