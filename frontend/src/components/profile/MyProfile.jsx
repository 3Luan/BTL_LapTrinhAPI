import React from "react";
import "./profile.css";
import { useDispatch, useSelector } from "react-redux";

const MyProfile = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
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
  );
};

export default MyProfile;
