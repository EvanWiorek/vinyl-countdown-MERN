import { useNavigate, useLocation } from "react-router-dom";
import vinyl from "./vinyl.png";

export default () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navAddAlbum = () => {
    navigate("/newalbum");
  };

  const navHome = () => {
    navigate("/");
  };

  if (location.pathname === "/") {
    return (
      <div className="my-navbar">
        <div className="navbar-content d-flex gap-5 align-items-center justify-content-between col-8 m-auto">
          <div className="d-flex gap-4">
            <img src={vinyl} alt="" width={70} />
            <h1 className="site-title">The Vinyl Countdown</h1>
          </div>
          <button className="btn btn-outline-light" onClick={navAddAlbum}>
            Add a New Record
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="my-navbar">
        <div className="navbar-content d-flex gap-5 align-items-center justify-content-between col-8 m-auto">
          <div className="d-flex gap-4">
            <img src={vinyl} alt="" width={70} />
            <h1 className="site-title">The Vinyl Countdown</h1>
          </div>
          <button className="btn btn-outline-light" onClick={navHome}>
            Back to Home
          </button>
        </div>
      </div>
    );
  }
};
