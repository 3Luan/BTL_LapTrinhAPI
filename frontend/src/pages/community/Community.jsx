import React from "react";
import "./community.css";
const Community = () => {
  return (
    <main>
      <section className="video_items flex">
        <div className="trending">
          <button className="chat title">Cộng đồng</button>

          <div class="community-posts">
            <div className="header-posts">
              <div class="avatar">
                <img
                  alt=""
                  src="https://bootdey.com/img/Content/avatar/avatar1.png"
                />
              </div>
              <div class="info">
                <a href="#/">Thàn Luân</a>
                <small class="text-muted">4:21 pm - 12.06.2014</small>
              </div>
            </div>
            <div class="body-posts">
              <div className="content">
                <p>
                  test test test test test test test test test test test test
                  test test test test test test test test test test test test
                  test test test test test test test test test test test test
                </p>
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
        </div>
      </section>
    </main>
  );
};

export default Community;
