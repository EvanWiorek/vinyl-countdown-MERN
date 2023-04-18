import React, { useEffect, useState } from "react";
import AlbumForm from "../components/AlbumForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default ({albums, setAlbums, loaded, setLoaded, errors, setErrors}) => {
  const navigate = useNavigate();

  const createAlbum = (album) => {
    axios.post("http://localhost:8000/api/newalbum", album).then((res) => {
      setAlbums([...albums, res.data]),
      setErrors([]),
      navigate("/");
    })
    .catch((err) => {
      const errorResponse = err.response.data.errors;
      const errorArr = [];
      for (const key of Object.keys(errorResponse)) {
        errorArr.push(errorResponse[key].message);
      }
      setErrors(errorArr);
    })
  };

  return (
    <div className="m-auto card p-3 mt-3 mb-4 col-5 my-shadow">
      <h1 className="text-center">Add a New Record</h1>
      <div className="m-auto col-10">
        <AlbumForm
          onSubmitProp={createAlbum}
          initialTitle=""
          initialArtist=""
          initialOwned={false}
          initialDescription=""
          initialGenres=""
          initialTitleError=""
          initialArtistNameError=""
          initialDescriptionError=""
          initialGenresError=""
          errors={errors}
          setErrors={setErrors}
        />
      </div>
    </div>
  );
};