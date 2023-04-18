import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default ({
  initialTitle,
  initialArtistName,
  initialOwned,
  initialDescription,
  initialGenres,
  onSubmitProp,
  formTitle,
  initialTitleError,
  initialArtistNameError,
  initialDescriptionError,
  initialGenresError,
  errors,
  setErrors,
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [artistName, setArtistName] = useState(initialArtistName);
  const [owned, setOwned] = useState(initialOwned);
  const [description, setDescription] = useState(initialDescription);
  const [genres, setGenres] = useState(initialGenres);
  const [titleError, setTitleError] = useState(initialTitleError);
  const [artistNameError, setArtistNameError] = useState(
    initialArtistNameError
  );
  const [descriptionError, setDescriptionError] = useState(
    initialDescriptionError
  );
  const [genresError, setGenresError] = useState(initialGenresError);

  const navigate = useNavigate();

  const homeButton = () => {
    navigate("/");
    setErrors([]);
  };

  let formIsValid = false;
  formIsValid =
    genresError === null &&
    artistNameError === null &&
    titleError === null &&
    descriptionError === null;

  const handleTitle = (e) => {
    setTitle(e.target.value);
    if (e.target.value.length < 1) {
      setTitleError("Album title must not be blank.");
    } else if (e.target.value.length < 2) {
      setTitleError("Album title must be longer than 2 characters.");
    } else {
      setTitleError(null);
    }
  };

  const handleArtistName = (e) => {
    setArtistName(e.target.value);
    if (e.target.value.length < 1) {
      setArtistNameError("Artist name must not be blank.");
    } else if (e.target.value.length < 2) {
      setArtistNameError("Artist name must be longer than 2 characters.");
    } else {
      setArtistNameError(null);
    }
  };

  const handleOwned = (e) => {
    setOwned(!owned);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
    if (e.target.value.length < 1) {
      setDescriptionError("Description must not be blank.");
    } else if (e.target.value.length < 3) {
      setDescriptionError("Description must be longer than 3 characters.");
    } else {
      setDescriptionError(null);
    }
  };

  const handleGenreOne = (e) => {
    setGenres({
      ...genres,
      [e.target.name]: e.target.value,
    });
    if (e.target.value.length < 1) {
      setGenresError("Each album should have at least one genre.");
    } else if (e.target.value.length < 3) {
      setGenresError("Genre name must be at least 3 characters.");
    } else {
      setGenresError(null);
    }
  };

  const handleGenresTwoThree = (e) => {
    setGenres({
      ...genres,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitProp({ title, artistName, description, owned, genres });
    console.log(errors);
    // setErrors([])
    if (errors === []) {
      navigate("/");
    }
  };

  return (
    <div>
      <h2 className="text-center">{formTitle}</h2>
      <form onSubmit={onSubmitHandler}>
        {errors.map((err, index) => (
          <p key={index} style={{ color: "tomato" }} className="mt-2">
            {err}
          </p>
        ))}
        <div className="form-inputs d-flex justify-content-around">
          <div className="left-side col-7">
            <div className="form-floating">
              <input
                type="text"
                onChange={handleTitle}
                id="title"
                value={title}
                className="form-control mt-4"
                placeholder="Album Title:"
              />
              <label>Album Title:</label>
              {titleError ? (
                <p style={{ color: "tomato" }} className="mt-2">
                  {titleError}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="form-floating">
              <input
                type="text"
                onChange={handleArtistName}
                id="artistName"
                value={artistName}
                className="form-control  mt-4"
                placeholder="Artist:"
              />
              <label>Artist:</label>
              {artistNameError ? (
                <p style={{ color: "tomato" }} className="mt-2">
                  {artistNameError}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="form-floating">
              <input
                type="text"
                onChange={handleDescription}
                id="description"
                value={description}
                className="form-control  mt-4"
                placeholder="Description:"
              />
              <label>Description:</label>
              {descriptionError ? (
                <p style={{ color: "tomato" }} className="mt-2">
                  {descriptionError}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="right-side col-4">
            <div className="genres">
              <div className="form-floating">
                <input
                  type="text"
                  onChange={handleGenreOne}
                  id="genreOne"
                  name="genreOne"
                  value={genres.genreOne}
                  className="form-control  mt-4"
                  placeholder="Last Name:"
                />
                <label>Genre 1:</label>
                {genresError ? (
                  <p style={{ color: "tomato" }} className="mt-2">
                    {genresError}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="form-floating">
                <input
                  type="text"
                  onChange={handleGenresTwoThree}
                  id="genreTwo"
                  name="genreTwo"
                  value={genres.genreTwo}
                  className="form-control  mt-4"
                  placeholder="Last Name:"
                />
                <label>Genre 2:</label>
              </div>
              <div className="form-floating">
                <input
                  type="text"
                  onChange={handleGenresTwoThree}
                  id="genreThree"
                  name="genreThree"
                  value={genres.genreThree}
                  className="form-control  mt-4"
                  placeholder="Last Name:"
                />
                <label>Genre 3:</label>
              </div>
            </div>
            <div className="form-check mt-3">
              <input
                className="form-check-input"
                type="checkbox"
                checked={owned}
                id="owned"
                name="owned"
                onChange={handleOwned}
              />
              <label className="form-check-label" htmlFor="owned">
                Owned
              </label>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center gap-3 mt-4 justify-content-end">
          <input
            type="submit"
            className={`btn btn-outline-primary ${
              formIsValid ? "" : "disabled"
            }`}
          />
          <div>
            <button className="btn btn-outline-success" onClick={homeButton}>
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
