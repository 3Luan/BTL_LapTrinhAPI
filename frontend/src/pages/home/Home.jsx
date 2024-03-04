import React, { useEffect } from "react";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { getPopularVideos } from "../../redux/videopopular/videoPopularAction";
import { useLocation } from "react-router-dom";
import Search from "../../components/search/Search";
import { handleRefresh } from "../../redux/auth/authAction";
import LoadingSkeleton from "../../components/Loading/LoadingSkeleton";

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
              {videos.isLoading ? (
                <>
                  {Array(10)
                    .fill(0)
                    .map((item, index) => (
                      <Home.Loading key={index}></Home.Loading>
                    ))}
                </>
              ) : (
                <>
                  {videos.videos.map((video) => (
                    <>
                      <div key={video.id} className="video_items">
                        <a href={`/watch/${video.id}`}>
                          <img
                            src={video.snippet.thumbnails.high.url}
                            alt=""
                          ></img>
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
                </>
              )}
            </section>
          </main>
        </>
      ) : (
        <Search />
      )}
    </>
  );
};

const Loading = () => {
  return (
    <>
      <div className="video_items">
        <a href="#">
          <LoadingSkeleton
            style={{
              width: "100%",
              height: "170px",
              borderRadius: "5px",
            }}
          ></LoadingSkeleton>
        </a>
        <div className="details flex">
          <div className="img">
            <LoadingSkeleton
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
              }}
            ></LoadingSkeleton>
          </div>
          <div className="heading">
            <LoadingSkeleton
              style={{
                marginTop: "10px",
                width: "100%",
                height: "50%",
                borderRadius: "5px",
              }}
            ></LoadingSkeleton>
            <LoadingSkeleton
              style={{
                marginTop: "5px",
                width: "100%",
                height: "30%",
                borderRadius: "5px",
              }}
            ></LoadingSkeleton>
          </div>
        </div>
      </div>
    </>
  );
};

Home.Loading = Loading;
export default Home;
