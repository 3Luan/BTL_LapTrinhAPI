import React, { useEffect } from "react";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { getPopularVideos } from "../../redux/videopopular/videoPopularAction";
import { useLocation } from "react-router-dom";
import Search from "../../components/search/Search";

const Home = () => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.videos);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    dispatch(getPopularVideos());
  }, []);

  return (
    <>
      {!query ? (
        <>
          <main>
            <section className="video_content grid">
              {videos.videos.map((video) => (
                <>
                  <div key={video.id} className="video_items">
                    <a href={`/watch/${video.id}`}>
                      <img src={video.snippet.thumbnails.high.url} alt=""></img>
                    </a>
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
                        <span>{video.snippet.publishedAt}</span>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </section>
          </main>
        </>
      ) : (
        <Search />
      )}
    </>
  );
};

export default Home;
