import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import  prfpic from "../img/1.jpeg";

export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;


  const logout = () => {
    localStorage.clear();

    window.location.reload();
  };
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Veteran Meet</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
       
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>

       
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">3</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={prfpic
              // user.profilePicture
              //   ? PF + user.profilePicture
              //   : PF + "/7.jpeg"
            }
            alt=""
            className="topbarImg"
          />
        </Link>
        <button onClick={logout} className="logout">
          Logout
        </button>
      </div>
    </div>
  );
}
