import React, { useEffect, useState } from "react";
import AlbumList from "../components/AlbumList";
import axios from "axios";

export default ({albums, setAlbums, loaded, setLoaded, removeFromDom}) => {
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/albums")
      .then((res) => {
        setAlbums(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <div className="mt-3">
      <h3 className="col-6 m-auto  mb-4 mt-4">Wishlist and Collection</h3>
      {loaded && (
        <AlbumList
          albums={albums}
          setAlbums={setAlbums}
          removeFromDom={removeFromDom}
        />
      )}
    </div>
  );
};