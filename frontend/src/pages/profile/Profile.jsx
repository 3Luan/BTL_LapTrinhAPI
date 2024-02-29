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
        <div className="avatar_profile">
          <img src={auth.avatar} alt="" />
        </div>
        <button className="name_profile">
          <span>{auth.name}</span>
        </button>
        <div className="tags">
          <label className="tags-bg active">Video đã xem</label>{" "}
          <label className="tags-bg">Video đã thích</label>{" "}
          <label className="tags-bg">Danh sách phát</label>{" "}
        </div>
        hello profile
      </div>
    </>
  );
};

export default Profile;
