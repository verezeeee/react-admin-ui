import { Link } from "react-router-dom";
import "./menu.scss";

export const Menu = () => {
  return (
    <div className="menu">
      <div className="item">
        <span className="title">MAIN</span>
        <Link to="/" className="displayItem">
          <img src="/home.svg" alt="home" />
          <span className="listItemTitle">Home</span>
        </Link>
        <Link to="/" className="displayItem">
          <img src="/profile.svg" alt="home" />
          <span className="profile">Profile</span>
        </Link>
      </div>
      <div className="item">
        <span className="title">MAIN</span>
        <Link to="/" className="displayItem">
          <img src="/home.svg" alt="home" />
          <span className="listItemTitle">Home</span>
        </Link>
        <Link to="/" className="displayItem">
          <img src="/profile.svg" alt="home" />
          <span className="profile">Profile</span>
        </Link>
      </div>
    </div>
  );
};
