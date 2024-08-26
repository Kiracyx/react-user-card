import React from "react";
import img from "./images/John.png";

function UserAvatar(props) {
  return <img src={img} alt="Person 1" className={props.className} />;
}

export default UserAvatar;
