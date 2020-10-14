import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <header>
      {props.users
        .filter((person) => {
          if (person.username !== props.currentUser.username) {
            return true;
          } else {
            return false;
          }
        })
        .map((user) => {
          return (
            <div className="users">
              <img className="avatar2" src={user.avatar}></img>
              <span className="username">{user.username}</span>
            </div>
          );
        })}
    </header>
  );
};

export default Header;
