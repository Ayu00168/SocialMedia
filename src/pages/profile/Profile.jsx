import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/person/ad.jpg"
                alt="profilecoverPic"
              />
              <img
                className="profileUserImg"
                src="assets/person/person3.jpg"
                alt="profilecoverPic"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Ayush Ranjan</h4>
              <span className="profileInfoDesc">You Know Me</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
