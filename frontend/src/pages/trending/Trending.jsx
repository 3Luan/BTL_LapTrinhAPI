import React, { useEffect, useState } from "react";
import "../home/home.css";
import "./trending.css";
import { useDispatch, useSelector } from "react-redux";
import { getPopularMusicVideos } from "../../redux/trending/trendingAction";

const Trending = () => {
  const dispatch = useDispatch();
  const trending = useSelector((state) => state.trending);

  useEffect(() => {
    dispatch(getPopularMusicVideos());
  }, []);

  return (
    <>
      <main>
        <section className="video_items flex">
          <div className="trending">
            <div className="right_content">
              <button className="chat title">Thịnh hành</button>
              <div className="tags">
                <label className="tags-bg">Mới nhất</label>{" "}
                <label className="tags-bg active">Âm nhạc</label>{" "}
                <label className="tags-bg">Trò chơi</label>{" "}
                <label className="tags-bg">Phim ảnh</label>
              </div>

              {trending.isLoading ? (
                <>Loading...</>
              ) : (
                <>
                  {trending.videos.map((trendingVideo) => (
                    <a href={`watch/${trendingVideo.id}`}>
                      <div className="video_items vide_sidebar_trending flex">
                        <div className="thumbnails">
                          <a href={`watch/${trendingVideo.id}`}>
                            <img
                              src={trendingVideo.snippet.thumbnails.high.url}
                              alt=""
                            ></img>
                          </a>
                        </div>
                        <div className="details">
                          <p>{trendingVideo.snippet.title}</p>
                          <span>
                            {trendingVideo.snippet.channelTitle}{" "}
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

export default Trending;
