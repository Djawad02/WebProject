import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";
// import RssFeedIcon from "@mui/icons-material/RssFeed";
// import ChatIcon from "@mui/icons-material/Chat";
// import VideocamIcon from "@mui/icons-material/Videocam";
// import GroupsIcon from "@mui/icons-material/Groups";
// import BookmarkIcon from "@mui/icons-material/Bookmark";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import EventIcon from "@mui/icons-material/Event";
// import Brightness4Icon from "@mui/icons-material/Brightness4";

import { Users } from "../../dummyData";

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Sidebar() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getAll = async () => {
      const allusers = await axios.get("/users/all");
      setUsers(allusers.data);
    };
    getAll();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
      
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>

          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chat</span>
          </li>

          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>

          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Education</span>
          </li>

          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Saved</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Profession</span>
          </li>
         
        </ul>
        
        <hr className="sidebarHr" />
       
      </div>
    </div>
  );
}
