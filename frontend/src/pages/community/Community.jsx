import React, { useEffect } from "react";
import "./community.css";
import { useDispatch, useSelector } from "react-redux";
import { handleGetPosts } from "../../redux/posts/postsAction";

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
                        {" "}
                        {item.user.name}{" "}
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
                            <p>{file.originalName}</p>
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
                        <button className="btn btn-white btn-xs">
                          <i className="fa fa-share"></i> Chia sẻ
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </main>
  );
};

export default Community;
