import React from "react";
import "./profile.css";
import { useDispatch, useSelector } from "react-redux";

const MyProfile = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  console.log(auth.avatar);

  return (
    <div className="profile">
      <button className="name_profile">
        <div className="avatar_profile">
          {auth.isLoading ? (
            <>Loading...</>
          ) : (
            <>
              <img src={auth.avatar} alt="avatar" />
            </>
          )}
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
