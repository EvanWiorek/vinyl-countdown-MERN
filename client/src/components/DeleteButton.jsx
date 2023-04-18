import React from "react";
import axios from "axios";

export default (props) => {
  const { albumId, deleteCallback } = props;

  const deleteAlbum = (e) => {
    axios
      .delete(`http://localhost:8000/api/album/${albumId}`)
      .then((res) => {
        deleteCallback();
      });
  };

  return (
    <button className="btn btn-outline-danger" onClick={deleteAlbum}>
      Delete
    </button>
  );
};
