import axios from "axios";
import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";
import React, { useState, useEffect } from "react";

export default ({ albums, setAlbums, removeFromDom }) => {
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/albums")
      .then((res) => setAlbums(res.data));
  }, []);

  return (
    <div className="col-6 m-auto">
      <table className="table table-hover my-shadow">
        <thead className="table-head-color">
          <tr>
            <th scope="col">
              <h5 className="p-2">Album Title</h5>
            </th>
            <th scope="col">
              <h5 className="p-2">Artist</h5>
            </th>
            <th scope="col">
              <h5 className="p-2">Owned</h5>
            </th>
            <th scope="col">
              <h5 className="p-2">Actions</h5>
            </th>
          </tr>
        </thead>
        <tbody>
          {albums.map((album, i) => (
            <tr key={i}>
              <td className="p-3">
                <h5>
                  <Link to={`/album/${album._id}`}>{album.title}</Link>
                </h5>
              </td>
              <td className="p-3">
                <h5>{album.artistName}</h5>
              </td>
              <td className="p-3">
                <h5>{album.owned === true? "Yes": "No"}</h5>
              </td>
              <td className="p-3 col-3">
                <p className="d-flex gap-3">
                  <Link
                    to={`/album/${album._id}/edit`}
                    className="btn btn-outline-warning"
                  >
                    Edit
                  </Link>
                  <DeleteButton
                    albumId={album._id}
                    deleteCallback={() => removeFromDom(album._id)}
                  />
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
