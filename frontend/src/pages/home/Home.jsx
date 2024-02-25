import React, { useEffect } from "react";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { handleFetchVideos } from "../../redux/video/videoAction";

const Home = () => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.videos);

  useEffect(() => {
    dispatch(handleFetchVideos());
  }, [dispatch]);

  console.log("videos: ", videos);
  return (
    <>
      <main>
        <section className="video_content grid">
          {videos.videos.map((video) => (
            <>
              <div key={video.id} className="video_items">
                <a href="/watch">
                  <img src={video.snippet.thumbnails.maxres.url} alt=""></img>
                </a>
                <div className="details flex">
                  <div className="img">
                    <img
                      src={video.snippet.thumbnails.default.url}
                      alt=""
                    ></img>
                  </div>
                  <div className="heading">
                    <p>{video.snippet.title}</p>
                    <span>
                      {video.snippet.channelTitle}{" "}
                      <i className="fa fa-circle-check"></i>{" "}
                    </span>
                    <span>{video.snippet.publishedAt}</span>
                  </div>
                </div>
              </div>
            </>
          ))}
        </section>
      </main>
    </>
  );
};

export default Home;
