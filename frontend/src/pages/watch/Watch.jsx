import React, { useEffect, useState } from "react";
import "../home/home.css";
import YouTube from "react-youtube";
import "./watch.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideoById } from "../../redux/watch/watchAction";
import { getVideoRelatedById } from "../../redux/related/relatedAction";

const Watch = () => {
  const { videoId } = useParams();
  const dispatch = useDispatch();
  const video = useSelector((state) => state.watch);
  const related = useSelector((state) => state.related);
  const title = video?.video?.snippet?.title;

  useEffect(() => {
    const fetchData = async () => {
      if (videoId) {
        await dispatch(getVideoById(videoId));
        if (title) {
          dispatch(getVideoRelatedById(title));
        }
      }
    };

    fetchData();
  }, [videoId, title, dispatch]);

  return (
    <>
      <main className="single_pages">
        <section className="video_items flex">
          {video.isLoading ? (
            <>Loading...</>
          ) : (
            <>
              <div className="left">
                <div className="left_content">
                  <YouTube
                    videoId={video.video.id}
                    opts={{
                      height: "480",
                      width: "100%",
                      playerVars: {
                        autoplay: 1,
                        controls: 1,
                        mute: 0,
                      },
                    }}
                  />

                  <div className="title">
                    <p>{video?.video?.snippet?.title}</p>
                  </div>
                  <div className="view flex2 border_bottom">
                    <div className="view-text">
                      <span>{video.video.statistics.viewCount} lượt xem</span>
                    </div>

                    <div className="flex">
                      <div className="icon">
                        <i className="fa fa-thumbs-up"></i>
                        <label>{video.video.statistics.likeCount}</label>
                      </div>
                      <div className="icon">
                        <i className="fa fa-thumbs-down"></i>
                      </div>
                      <div className="icon">
                        <i className="fa fa-share"></i>
                      </div>

                      <div className="icon">
                        <i className="fa fa-bookmark"></i>
                      </div>
                      <div className="icon">
                        <i className="fa fa-ellipsis"></i>
                      </div>
                    </div>
                  </div>
                  <div className="details flex border_bottom">
                    <div className="img">
                      <img
                        src={video.video.snippet.thumbnails.default.url}
                        alt=""
                      ></img>
                    </div>
                    <div className="heading">
                      <h4>
                        {video.video.snippet.channelTitle}{" "}
                        <i className="fa fa-circle-check"></i>
                      </h4>
                      <span>15M Người đăng ký</span>
                      <h5>{video.video.snippet.description}</h5>
                      <span>Xem thêm</span>
                    </div>
                  </div>
                  <div className="comment">
                    <div className="comment-heading flex">
                      <h4>{video.video.statistics.commentCount} Bình luận</h4>
                      <h4>
                        <i className="fa fa-list-ul"></i>
                        <label>Sắp xếp theo</label>
                      </h4>
                    </div>
                  </div>
                  <div className="details comment_self flex">
                    <div className="img">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
                        alt=""
                      ></img>
                    </div>
                    <div className="heading">
                      <input type="text" placeholder="Viết bình luận"></input>
                    </div>
                  </div>
                  <div className="details_Comment">
                    <div className="details flex">
                      <div className="img">
                        <img src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png" />
                      </div>
                      <div className="heading">
                        <h4>
                          Võ Văn A <span>2 months ago</span>
                        </h4>
                        <p>test bình luận</p>
                        <div className="comment-like flex">
                          <div className="icon">
                            <i className="fa fa-thumbs-up"></i>
                            <label>5</label>
                          </div>
                          <div className="icon">
                            <i className="fa fa-thumbs-down"></i>
                          </div>
                          <div className="icon">
                            <label>Phản hồi</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="replay">
                    <label className="tags">
                      <i className="fa fa-caret-up"></i> 1 phản hồi
                    </label>
                    <div className="replay-details flex">
                      <div className="img">
                        <img src="assets/images/logo.png" alt=""></img>
                      </div>
                      <div className="text">
                        <h4>
                          <label>{video.video.snippet.channelTitle}</label>{" "}
                          <span>2 months ago</span>
                        </h4>
                        <p>Test phản hồi bình luận</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="right">
            <div className="right_content">
              <button className="chat">
                Hiện nội dung phát lại cuộc trò chuyện
              </button>

              <div className="tags">
                <label className="tags-bg">Tất cả</label>
                <label className="tags-bg">Web Design</label>
                <label className="tags-bg">Frontend</label>
                <label className="tags-bg">Backend</label>
              </div>

              {related.isLoading ? (
                <>Loading...</>
              ) : (
                <>
                  {related.video.map((relatedVideo) => (
                    <a href={relatedVideo.id.videoId}>
                      <div className="video_items vide_sidebar flex">
                        <a href={relatedVideo.id.videoId}>
                          <img
                            src={relatedVideo.snippet.thumbnails.high.url}
                            alt=""
                          ></img>
                        </a>
                        <div className="details">
                          <p>{relatedVideo.snippet.title}</p>
                          <span>
                            {relatedVideo.snippet.channelTitle}{" "}
                            <i className="fa fa-cricle-check"> </i>
                          </span>
                          <span>56.7M . 1 Week ago</span>
                        </div>
                      </div>
                    </a>
                  ))}
                </>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Watch;
