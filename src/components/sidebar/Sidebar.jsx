import React from "react";
import { useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [hovered, setHovered] = useState([0, 0, 0, 0, 0, 0, 0]);
  function modifyHovered(index) {
    let list = [0, 0, 0, 0, 0, 0, 0];
    list[index] = 1;
    setHovered(list);
  }
  return (
    <div className={`navigation ${false ? "active" : ""}`}>
      <ul>
        <li
          onMouseOver={() => modifyHovered(0)}
          className={hovered[0] ? "hovered" : ""}
        >
          <Link to="/" className="sidebarItem">
            <span className="icon">
              <ion-icon name="cloudy-outline"></ion-icon>
            </span>
            <span className="title">Clusters</span>
          </Link>
        </li>
        <li
          onMouseOver={() => modifyHovered(1)}
          className={hovered[1] ? "hovered" : ""}
        >
          <Link to="/edge" className="sidebarItem">
            <span className="icon">
              <ion-icon name="people-outline"></ion-icon>
            </span>
            <span className="title">Edge</span>
          </Link>
        </li>
        <li
          onMouseOver={() => modifyHovered(2)}
          className={hovered[2] ? "hovered" : ""}
        >
          <Link to="/devices" className="sidebarItem">
            <span className="icon">
              <ion-icon name="desktop-outline"></ion-icon>
            </span>
            <span className="title">Devices</span>
          </Link>
        </li>
        <li
          onMouseOver={() => modifyHovered(3)}
          className={hovered[3] ? "hovered" : ""}
        >
          <Link to="/" className="sidebarItem">
            <span className="icon">
              <ion-icon name="chatbubble-outline"></ion-icon>
            </span>
            <span className="title">Messages</span>
          </Link>
        </li>
        <li
          onMouseOver={() => modifyHovered(4)}
          className={hovered[4] ? "hovered" : ""}
        >
          <Link to="/" className="sidebarItem">
            <span className="icon">
              <ion-icon name="help-outline"></ion-icon>
            </span>
            <span className="title">Help</span>
          </Link>
        </li>
        <li
          onMouseOver={() => modifyHovered(5)}
          className={hovered[5] ? "hovered" : ""}
        >
          <Link to="/" className="sidebarItem">
            <span className="icon">
              <ion-icon name="settings-outline"></ion-icon>
            </span>
            <span className="title">Settings </span>
          </Link>
        </li>

        <li
          onMouseOver={() => modifyHovered(6)}
          className={hovered[6] ? "hovered" : ""}
        >
          <Link to="/" className="sidebarItem">
            <span className="icon">
              <ion-icon name="log-out-outline"></ion-icon>
            </span>
            <span className="title">Sign out</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
