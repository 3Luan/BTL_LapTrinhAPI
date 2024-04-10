import React, { useEffect } from "react";
import "./search.css";
import { useDispatch, useSelector } from "react-redux";
import { getPopularVideos } from "../../redux/videopopular/videoPopularAction";
import Home from "../../pages/home/Home";
import moment from "moment";
import "moment/locale/vi";
import { Link } from "react-router-dom";

const Search = () => {
  moment.locale("vi");

  const dispatch = useDispatch();
  const videos = useSelector((state) => state.videos);

  useEffect(() => {
    dispatch(getPopularVideos());
  }, []);

  return (
    <main>
      <section className="video_content grid">
        {videos.isLoading ? (
          <>
            {Array(2)
              .fill(0)
              .map((item, index) => (
                <Home.Loading key={index}></Home.Loading>
              ))}
          </>
        ) : (
          <>
            {videos?.videoSearch?.map((video) => {
              return (
                <>
                  <div key={video.id.videoId} className="video_items">
                    <Link to={`/watch/${video.id.videoId}`}>
                      <img src={video.snippet.thumbnails.high.url} alt=""></img>
                    </Link>
                    <div className="details flex">
                      <div className="img">
                        <img
                          src={video.snippet.thumbnails.high.url}
                          alt=""
                        ></img>
                      </div>
                      <div className="heading">
                        <p>{video.snippet.title}</p>
                        <span>
                          {video.snippet.channelTitle}{" "}
                          <i className="fa fa-circle-check"></i>{" "}
                        </span>
                        <span>
                          {" . "}
                          {moment(video.snippet.publishedAt).fromNow()}
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </>
        )}
      </section>
    </main>
  );
};

export default Search;
