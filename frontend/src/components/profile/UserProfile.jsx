// import React from "react";
// import "./profile.css";
// import { useDispatch, useSelector } from "react-redux";

// const UserProfile = () => {
//   const user = useSelector((state) => state.user);
//   const dispatch = useDispatch();

//   return (
//     <div className="profile">
//       <button className="name_profile">
//         <div className="avatar_profile">
//           <img src={user.avatar} alt="" />
//         </div>
//         <span>{user.name}</span>
//         <hr />
//         <div className="tags">
//           <button className="tags-bg active">Thông tin</button>
//           <button className="tags-bg">Bài viết</button>
//         </div>
//         <hr />
//       </button>
//     </div>
//   );
// };

// export default UserProfile;
import React, { useEffect, useState } from "react";
import "./profile.css";
import { useDispatch, useSelector } from "react-redux";
import { handlegetPostsByUserId } from "../../redux/posts/postsAction";
import Community from "../../pages/community/Community";
import moment from "moment";
import "moment/locale/vi";
import PostCard from "../Card/PostCard";

const UserProfile = () => {
  moment.locale("vi");

  const user = useSelector((state) => state.user);
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [currentTab, setCurrentTab] = useState("info");
  console.log("user", user);
  useEffect(() => {
    if (currentTab === "posts") {
      dispatch(handlegetPostsByUserId(user.user._id));
    }
  }, [currentTab]);

  const renderContent = () => {
    if (currentTab === "info") {
      return (
        <>
          <div className="info-content">
            <span>Email:</span> {user.user.email}
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
          {user.isLoading ? (
            <>Loading...</>
          ) : (
            <>
              <img src={user.user.avatar} alt="avatar" />
            </>
          )}
        </div>
        <div className="name_profile">
          <span>{user.user.name}</span>
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

export default UserProfile;
