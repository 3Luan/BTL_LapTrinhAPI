import React from "react";
import "./profile.css";
import { useDispatch, useSelector } from "react-redux";

const UserProfile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  console.log(user);

  return (
    <div className="profile">
      <button className="name_profile">
        <div className="avatar_profile">
          <img src={user.avatar} alt="" />
        </div>
        <span>{user.name}</span>
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

export default UserProfile;
