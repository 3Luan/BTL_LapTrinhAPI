import React, { useEffect } from "react";
import "./community.css";
import { useDispatch, useSelector } from "react-redux";
import { handleGetPosts } from "../../redux/posts/postsAction";
import LoadingSkeleton from "../../components/Loading/LoadingSkeleton";

const Community = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(handleGetPosts());
  }, [dispatch]);

  return (
    <main>
      <section className="video_items flex">
        <div className="trending">
          <button className="chat title">Cộng đồng</button>

          {posts.isLoading ? (
            <>
              {Array(2)
                .fill(0)
                .map((item, index) => (
                  <Community.Loading key={index}></Community.Loading>
                ))}
            </>
          ) : (
            <>
              {posts &&
                posts.posts.length > 0 &&
                posts.posts.map((item) => {
                  return (
                    <div className="community-posts" key={item._id}>
                      <div className="header-posts">
                        <a href={`profile/${item.user._id}`}>
                          <div className="avatar">
                            <img alt="" src={item.user.avatar} />
                          </div>
                        </a>
                        <div className="info">
                          <a href={`profile/${item.user._id}`}>
                            {item.user.name}
                          </a>

                          <small className="text-muted">{item.createdAt}</small>
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
                                  {file.originalName} (Size: {file.size} bytes)
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
      </section>
    </main>
  );
};

const Loading = () => {
  return (
    <>
      <div className="community-posts">
        <div className="header-posts">
          <a href="#">
            <div className="avatar">
              <LoadingSkeleton
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                }}
              ></LoadingSkeleton>
            </div>
          </a>
          <div className="info">
            <a href="#">
              <LoadingSkeleton
                style={{
                  width: "20%",
                  height: "20px",
                  borderRadius: "5px",
                }}
              ></LoadingSkeleton>
            </a>
            <small className="text-muted">
              <LoadingSkeleton
                style={{
                  width: "20%",
                  height: "10px",
                  marginTop: "5px",
                  borderRadius: "3px",
                }}
              ></LoadingSkeleton>
            </small>
          </div>
        </div>
        <div className="body-posts">
          <div className="content">
            <p>
              <LoadingSkeleton
                style={{
                  width: "100%",
                  height: "100px",
                  borderRadius: "10px",
                }}
              ></LoadingSkeleton>
            </p>
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
              <button className="btn btn-white btn-xs">
                <i className="fa fa-share"></i> Chia sẻ
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
Community.Loading = Loading;

export default Community;
