import React, { useEffect, useState } from "react";
import "../home/home.css";
import "./saved.css";
import { useDispatch, useSelector } from "react-redux";
import { handleGetSavedVideo } from "../../redux/saved/savedAction";

const Saved = () => {
  const dispatch = useDispatch();
  const saved = useSelector((state) => state.saved);

  useEffect(() => {
    dispatch(handleGetSavedVideo());
  }, []);

  // Sắp xếp mảng saved theo thời gian cập nhật mới nhất
  const sortedSaved = [...saved.saved].sort((a, b) => {
    const dateA = new Date(a.addedAt);
    const dateB = new Date(b.addedAt);
    return dateB - dateA;
  });

  return (
    <>
      <main>
        <section className="video_items flex">
          <div className="saved">
            <div className="right_content">
              <button className="chat title">Video đã lưu</button>
              <div className="tags">
                <label className="tags-bg">Video</label>{" "}
              </div>

              {saved.isLoading ? (
                <>Loading...</>
              ) : (
                <>
                  {sortedSaved?.map((item) => {
                    return (
                      <a href={`watch/${item.videoInfo.id}`}>
                        <div className="video_items vide_sidebar_saved flex">
                          <div className="thumbnails">
                            <a href={`watch/${item.videoInfo.id}`}>
                              <img
                                src={item.videoInfo.snippet.thumbnails.high.url}
                                alt=""
                              ></img>
                            </a>
                          </div>
                          <div className="details">
                            <p>{item.videoInfo.snippet.title}</p>
                            <span>
                              {item.videoInfo.snippet.channelTitle}
                              <i className="fa fa-cricle-check"> </i>
                            </span>
                            <br />
                            <span>
                              {item.videoInfo.statistics.viewCount} lượt xem
                            </span>
                            <br />

                            <span>
                              {item.videoInfo.snippet.description.length > 50
                                ? item.videoInfo.snippet.description.substring(
                                    0,
                                    150
                                  ) + "..."
                                : item.videoInfo.snippet.description}
                            </span>
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Saved;
