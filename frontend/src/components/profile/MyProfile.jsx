import React, { useEffect, useState } from "react";
import "./profile.css";
import { useDispatch, useSelector } from "react-redux";
import { handlegetPostsByUserId } from "../../redux/posts/postsAction";
import Community from "../../pages/community/Community";
import moment from "moment";
import "moment/locale/vi";
import PostCard from "../Card/PostCard";

const MyProfile = () => {
  moment.locale("vi");

  const auth = useSelector((state) => state.auth);
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [currentTab, setCurrentTab] = useState("info");

  useEffect(() => {
    if (currentTab === "posts") {
      dispatch(handlegetPostsByUserId(auth.id));
    }
  }, [currentTab]);

  const renderContent = () => {
    if (currentTab === "info") {
      return (
        <>
          <div className="info-content">
            <span>Email:</span> {auth.email}
          </div>
        </>
      );
    } else if (currentTab === "posts") {
      return (
        <>
          <div className="posts-content">
            {posts.isLoading || posts.posts.length === 0 ? (
              <>
                {Array(2)
                  .fill(0)
                  .map((item, index) => (
                    <Community.Loading key={index}></Community.Loading>
                  ))}
              </>
            ) : (
              <>
                {posts.posts.length > 0 &&
                  posts.posts.map((item) => {
                    return <PostCard item={item} />;
                  })}
              </>
            )}
          </div>
        </>
      );
    }
  };

  return (
    <>
      <div className="my_profile">
        <div className="avatar_profile">
          {auth.isLoading ? (
            <>Loading...</>
          ) : (
            <>
              <img src={auth.avatar} alt="avatar" />
            </>
          )}
        </div>
        <div className="name_profile">
          <span>{auth.name}</span>
        </div>
        <hr />
        <div className="tags">
          {/* Khi click vào button sẽ chuyển tab hiện tại */}
          <button
            className={`tags-bg ${currentTab === "info" ? "active" : ""}`}
            onClick={() => setCurrentTab("info")}
          >
            Thông tin
          </button>
          <button
            className={`tags-bg ${currentTab === "posts" ? "active" : ""}`}
            onClick={() => setCurrentTab("posts")}
          >
            Bài viết
          </button>
        </div>
        <hr />
        {renderContent()}
      </div>
    </>
  );
};

export default MyProfile;
