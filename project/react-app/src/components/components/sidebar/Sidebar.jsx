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
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Calender Events</span>
          </li>
         
        </ul>
        
        <hr className="sidebarHr" />
       
      </div>
    </div>
  );
}
