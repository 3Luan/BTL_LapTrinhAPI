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
              console.log("item", item);
              return (
                <div class="community-posts">
                  <div className="header-posts">
                    <div class="avatar">
                      <img
                        alt=""
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      />
                    </div>
                    <div class="info">
                      <a href="#/"> Thành Luân </a>
                      <small class="text-muted">{item.createdAt}</small>
                    </div>
                  </div>
                  <div class="body-posts">
                    <div className="content">
                      <p>{item.content}</p>
                    </div>
                    <div className="footer-posts">
                      <div class="interaction">
                        <hr />
                        <button class="btn btn-white btn-xs">
                          <i class="fa fa-thumbs-up"></i> Thích
                        </button>
                        <button class="btn btn-white btn-xs">
                          <i class="fa fa-comments"></i> Bình luận
                        </button>
                        <button class="btn btn-white btn-xs">
                          <i class="fa fa-share"></i> Chia sẻ
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
