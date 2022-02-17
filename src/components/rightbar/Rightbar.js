import React from "react";
import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../../components/online/online";

function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="/assets/person/gift.jpg" className="birthdayImg" alt="" />
          <span className="birthdaytext">
            <b>Anubhav</b> and <b> 6 others friends </b> have a birthday today
          </span>
        </div>
        <img className="rightbarAd" src="/assets/person/ad.jpg" alt="" />
        <h4 className="rightbarTitle"> Online Friends </h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Rightbar;
