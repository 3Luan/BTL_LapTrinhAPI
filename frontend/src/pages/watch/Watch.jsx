import React, { useEffect, useState } from "react";
import "../home/home.css";
import YouTube from "react-youtube";
import "./watch.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideoById } from "../../redux/watch/watchAction";
import { getVideoRelatedById } from "../../redux/related/relatedAction";
import { handleAddHistory } from "../../redux/history/historyAction";
import { handleToggleSaveVideo } from "../../redux/saved/savedAction";
import { getVideoCommentsById } from "../../redux/comment/commentVideoAction";
import numeral from "numeral";
import moment from "moment";
import "moment/locale/vi";

const Watch = () => {
  moment.locale("vi");

  const { videoId } = useParams();
  const dispatch = useDispatch();
  const video = useSelector((state) => state.watch);
  const related = useSelector((state) => state.related);
  const commentVideo = useSelector((state) => state.commentVideo);
  const saved = useSelector((state) => state.saved);
  const title = video?.video?.snippet?.title;

  useEffect(() => {
    if (video.video && !video.isLoading) {
      dispatch(handleAddHistory(videoId));
      dispatch(getVideoCommentsById(videoId));

      console.log("commentVideo", commentVideo);
    }
  }, [video.video]);

  useEffect(() => {
    if (videoId) {
      dispatch(getVideoById(videoId));
      if (title) {
        const halfLength = Math.ceil(title.length / 4);
        const firstHalf = title.slice(0, halfLength);

        dispatch(getVideoRelatedById(firstHalf));
      }
    }
  }, []);

  const onclickToggleSaveVideo = () => {
    dispatch(handleToggleSaveVideo(videoId));
  };

  return (
    <>
      <main className="single_pages">
        <section className="video_items flex">
          {video.isLoading ? (
            <>Loading...</>
          ) : (
            <>
              {video.video && (
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
                          <span>
                            {numeral(video.video.statistics.viewCount).format(
                              "0,0"
                            )}{" "}
                            lượt xem
                          </span>
                        </div>

                        <div className="flex">
                          <div className="icon">
                            <i className="fa fa-thumbs-up"></i>
                            <label>
                              {numeral(video.video.statistics.likeCount).format(
                                "0,0"
                              )}
                            </label>
                          </div>
                          <div className="icon">
                            <i className="fa fa-thumbs-down"></i>
                          </div>
                          <div className="icon">
                            <i className="fa fa-share"></i>
                          </div>

                          <div className="icon">
                            {saved.isLoading ? (
                              <>loading...</>
                            ) : (
                              <>
                                <button
                                  onClick={() => {
                                    onclickToggleSaveVideo();
                                  }}
                                >
                                  <i className="fa fa-bookmark text-white"></i>
                                </button>
                              </>
                            )}
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
                          <h5>
                            {video.video.snippet.description.length > 50
                              ? video.video.snippet.description.substring(
                                  0,
                                  200
                                ) + "..."
                              : video.video.snippet.description}
                          </h5>

                          <span>Xem thêm</span>
                        </div>
                      </div>
                      <div className="comment">
                        <div className="comment-heading flex">
                          <h5>
                            {numeral(
                              video.video.statistics.commentCount
                            ).format("0,0")}{" "}
                            Bình luận
                          </h5>
                          <h5>
                            <i className="fa fa-list-ul"></i>
                            <label>Sắp xếp theo</label>
                          </h5>
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
                          <input
                            type="text"
                            placeholder="Viết bình luận"
                          ></input>
                        </div>
                      </div>
                      {/* Bình luận */}

                      {commentVideo?.comment?.length > 0 &&
                        commentVideo?.comment?.map((item) => {
                          return (
                            <>
                              <div className="details_Comment">
                                <div className="details flex">
                                  <div className="img">
                                    <img
                                      src={
                                        item.snippet.topLevelComment.snippet
                                          .authorProfileImageUrl
                                      }
                                    />
                                  </div>
                                  <div className="heading">
                                    <h4>
                                      {
                                        item.snippet.topLevelComment.snippet
                                          .authorDisplayName
                                      }{" "}
                                      <span>
                                        {moment(
                                          item.snippet.topLevelComment.snippet
                                            .updatedAt
                                        ).fromNow()}
                                      </span>
                                    </h4>

                                    <p
                                      dangerouslySetInnerHTML={{
                                        __html:
                                          item.snippet.topLevelComment.snippet
                                            .textDisplay,
                                      }}
                                    />
                                    <div className="comment-like flex">
                                      <div className="icon">
                                        <i className="fa fa-thumbs-up"></i>
                                        <label>
                                          {
                                            item.snippet.topLevelComment.snippet
                                              .likeCount
                                          }
                                        </label>
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
                              {item.snippet.totalReplyCount > 0 ? (
                                <>
                                  <div className="replay">
                                    <label className="tags">
                                      <i className="fa fa-caret-up"></i>{" "}
                                      {item.snippet.totalReplyCount} phản hồi
                                    </label>
                                  </div>
                                </>
                              ) : null}
                            </>
                          );
                        })}

                      {/* <div className="replay">
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
                      </div> */}

                      {/* end bình luận */}
                    </div>
                  </div>
                </>
              )}
            </>
          )}

          <div className="right">
            <div className="right_content">
              <button className="chat">Danh sách các Video liên quan</button>

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
