import React, { useEffect, useState } from "react";
import "../home/home.css";
import "./profile.css";
import { useSelector } from "react-redux";

const Profile = () => {
  const auth = useSelector((state) => state.auth);

  console.log("auth", auth);
  return (
    <>
      <div className="profile">
        <button className="name_profile">
          <div className="avatar_profile">
            <img src={auth.avatar} alt="" />
          </div>
          <span>{auth.name}</span>
          <hr />
          <div className="tags">
            <button className="tags-bg active">Thông tin</button>
            <button className="tags-bg">Bài viết</button>
          </div>
          <hr />
        </button>
      </div>
    </>
  );
};

export default Profile;
