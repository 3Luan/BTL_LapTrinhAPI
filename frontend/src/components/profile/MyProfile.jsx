import React, { useEffect, useState } from "react";
import "./profile.css";
import { useDispatch, useSelector } from "react-redux";
import { handlegetPostsByUserId } from "../../redux/posts/postsAction";
import Community from "../../pages/community/Community";
import moment from "moment";
import "moment/locale/vi";

const MyProfile = () => {
  moment.locale("vi");

  const auth = useSelector((state) => state.auth);
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [currentTab, setCurrentTab] = useState("info");

  useEffect(() => {
    if (currentTab === "posts") {
      dispatch(handlegetPostsByUserId());
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
                    return (
                      <div className="community-posts" key={item._id}>
                        <div className="header-posts">
                          <div className="avatar">
                            <img alt="" src={item.user.avatar} />
                          </div>
                          <div className="info">
                            {item.user.name}
                            <small className="text-muted">
                              {moment(item.createdAt).fromNow()}
                            </small>
                          </div>
                        </div>
                        <div className="body-posts">
                          <div className="content">
                            <p>{item.content}</p>
                          </div>
                          <div className="images_posts">
                            {item.images &&
                              item.images.map((image, index) => (
                                <img
                                  key={index}
                                  alt={`Post Image ${index}`}
                                  src={`data:${image.contentType};base64,${image.data}`}
                                />
                              ))}
                          </div>
                          <div className="files_posts">
                            {item.files &&
                              item.files.map((file, index) => (
                                <div key={index} className="file-item">
                                  <a
                                    href={`data:${file.contentType};base64,${file.data}`}
                                    download={file.originalName}
                                  >
                                    {file.originalName} (Size: {file.size}{" "}
                                    bytes)
                                  </a>
                                </div>
                              ))}
                          </div>

                          <div className="footer-posts">
                            <div className="interaction">
                              <hr />
                              <button className="btn btn-white btn-xs">
                                <i className="fa fa-thumbs-up"></i> Thích
                              </button>
                              <button className="btn btn-white btn-xs">
                                <i className="fa fa-comments"></i> Bình luận
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
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
