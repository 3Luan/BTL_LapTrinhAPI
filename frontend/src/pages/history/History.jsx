import React, { useEffect, useState } from "react";
import "../home/home.css";
import "./history.css";
import { useDispatch, useSelector } from "react-redux";
import { handleGetHistory } from "../../redux/history/historyAction";
import { Link } from "react-router-dom";

const History = () => {
  const dispatch = useDispatch();
  const history = useSelector((state) => state.history);

  useEffect(() => {
    dispatch(handleGetHistory());
  }, []);

  // Sắp xếp mảng history theo thời gian cập nhật mới nhất
  const sortedHistory = [...history.history].sort((a, b) => {
    const dateA = new Date(a.addedAt);
    const dateB = new Date(b.addedAt);
    return dateB - dateA;
  });

  return (
    <>
      <main>
        <section className="video_items flex">
          <div className="history">
            <div className="right_content">
              <button className="chat title">Video đã xem</button>
              <div className="tags">
                <label className="tags-bg">Video</label>{" "}
              </div>

              {history.isLoading ? (
                <>Loading...</>
              ) : (
                <>
                  {sortedHistory.map((item) => {
                    return (
                      <Link to={`/watch/${item.videoInfo.id}`}>
                        <div className="video_items vide_sidebar_history flex">
                          <div className="thumbnails">
                            <Link to={`/watch/${item.videoInfo.id}`}>
                              <img
                                src={item.videoInfo.snippet.thumbnails.high.url}
                                alt=""
                              ></img>
                            </Link>
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
                      </Link>
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

export default History;
