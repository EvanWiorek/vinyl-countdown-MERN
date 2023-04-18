import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default (props) => {
  const [album, setAlbum] = useState({});
  const [genres, setGenres] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  const goBackLink = () => {
    navigate(-1);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/album/${id}`)
      .then((res) => setAlbum(res.data))
      .catch((err) => console.log(err));
    genreStringFunction();
  });

  const genreStringFunction = () => {
    let genreString = "";
    for (const genre in album.genres) {
      genreString += album.genres[genre] + ", "
    }
    genreString = genreString.substring(0, genreString.length-2);
    setGenres(genreString)
  };

  return (
    <div className="mt-4 album-container m-auto">
      <h3 className="m-auto mb-4">Details for: {album.title}</h3>
      <div className="card  m-auto my-shadow">
        <div className="card-header text-center align-items-center d-flex justify-content-between">
          {album.title}{" "}
          <div className="buttons justify-content-end d-flex gap-3 m-3">
            <Link
              to={`/album/${album._id}/edit`}
              className="btn btn-outline-warning"
            >
              Edit
            </Link>
            <button className="btn btn-outline-success" onClick={goBackLink}>
              Go Back
            </button>
          </div>
        </div>
        <div className="card-body d-flex gap-5">
          <div className="left-side">
            <p>Artist: </p>
            <p>Owned: </p>
            <p>Description: </p>
            <p>Genres:</p>
          </div>
          <div className="right-side">
            <p>{album.artistName}</p>
            <p>{album.owned === true? "Yes": "No"}</p>
            <p>{album.description}</p>
            <p>{genres}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
