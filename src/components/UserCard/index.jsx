import React, { Component } from "react";
import UserAvatar from "./../UserAvatar";
import constants from "./../../constants";
import "./UserCard.css";

const userName = constants.Person1.name;
const userDesc = constants.Person1.description;
const link = "";

class Index extends Component {
  render() {
    return (
      <div className="user-card">
        <div className="avatar-section">
          <div className="pic-wrapper">
            <UserAvatar className="user-pic" />
          </div>
          <p className="name">{userName}</p>
        </div>
        <div className="desc-section">
          <p className="desc">{userDesc}</p>
          <div className="button-wrapper">
            <button className="btn1">
              <a href="#" className="btn-link"></a>
            </button>
            <button className="btn2">
              <a href="#" className="btn-link"></a>
            </button>
          </div>
          <div className="socials">
            <a href={"https://ua.linkedin.com/" + link}></a>
            <a href={"https://github.com/" + link}></a>
            <a href={"https://www.instagram.com/" + link}></a>
            <a href={"#" + link}></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
