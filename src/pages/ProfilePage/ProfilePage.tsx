import React from "react";
import { useSelector } from "react-redux";
import NavBar from "../../components/NavBar/NavBar";
import { auth } from "../../firebase";
import { selectUser } from "../../redux/userSlice";
import "./ProfilePage.css";

function ProfilePage(): React.ReactElement {
  const user = useSelector(selectUser);

  return (
    <div className="profilePage">
      <NavBar />
      <div className="profilePage__body">
        <h1>Edit Profile</h1>
        <div className="profilePage__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profilePage__details">
            <h2>{user?.email}</h2>
            <button
              type="button"
              className="profilePage__signOut"
              onClick={() => auth.signOut()}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
