import React from "react";
import "./topbar.css";
import { NotificationsNone, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          {/* <span className="logo"></span> */}
          <img src="/assets/logo.png" alt="Namla Logo" />
          {/* <div className="toggle">
            <ion-icon name="menu-outline" />
          </div> */}
        </div>
        <ul className="headerLinks">
          <li className="headerItem">Home</li>
          <li className="headerItem">Admin</li>
          <li className="headerItem">Config</li>
          <li className="headerItem">Analytics</li>
        </ul>

        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone className="icon" />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQEaYYOdM6ENMw/profile-displayphoto-shrink_100_100/0/1555681417601?e=1652918400&v=beta&t=CaHQ4JRP440y3bkYGM-D0PQEWXqLnv9uEbH7i7JEwUY"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
