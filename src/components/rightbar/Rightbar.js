import React from "react";
import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../../components/online/online";

function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
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
      </>
    );
  };

  const ProfilerightBar = () => {
    return (
      <>
        <h4 ClassName="rightbarTitle"> User Info</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoitem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Bhubneshwar</span>
          </div>
          <div className="rightbarInfoitem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Bhubneshwar</span>
          </div>
          <div className="rightbarInfoitem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4> User's Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/person/person1.jpg "
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Rishu</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfilerightBar /> : <HomeRightbar />}
      </div>
    </div>
  );
}

export default Rightbar;
