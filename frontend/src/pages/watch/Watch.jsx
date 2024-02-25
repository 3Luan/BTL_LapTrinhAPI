import React from "react";
import "../home/home.css";

import "./watch.css";

const Watch = () => {
  return (
    <>
      <main className="single_pages">
        <section className="video_items flex">
          <div className="left">
            <div className="left_content">
              <video controls>
                <source
                  src="/assets/videos/video1.mp4"
                  type="video/mp4"
                  poster="images/video_images/back1.jpg"
                ></source>
              </video>

              <div className="tag">
                <label className="tags">#web #webdesign #Frontend </label>
                <p>How to make Hotel Booking Website With HTML CSS ......</p>
              </div>
              <div className="view flex2 border_bottom">
                <div className="view-text">
                  <span>693,348 view Premiered 53 minutes ago</span>
                </div>

                <div className="flex">
                  <div className="icon">
                    <i className="fa fa-thumbs-up"></i>
                    <label>225k</label>
                  </div>
                  <div className="icon">
                    <i className="fa fa-thumbs-down"></i>
                    <label>DISLIKE</label>
                  </div>
                  <div className="icon">
                    <i className="fa fa-share"></i>
                    <label>SHARE</label>
                  </div>
                  <div className="icon">
                    <i className="fa fa-scissors"></i>
                    <label>CLIP</label>
                  </div>
                  <div className="icon">
                    <i className="fa fa-bookmark"></i>
                    <label>SAVE</label>
                  </div>
                  <div className="icon">
                    <i className="fa fa-ellipsis"></i>
                  </div>
                </div>
              </div>

              <div className="details flex border_bottom">
                <div className="img">
                  <img src="assets/images/logo.png" alt=""></img>
                </div>
                <div className="heading">
                  <h4>
                    GorkCoder <i className="fa fa-circle-check"></i>{" "}
                  </h4>
                  <span>15M Subscribers</span>
                  <h5>
                    Responsive Youtube Clone in HTML CSS and Javascript |
                    Dark/LIght Mode | GorkCoder{" "}
                  </h5>
                  <h5>
                    In this video tutorial, I have show how to create a
                    responsive youtube clone using Htlm and css only
                  </h5>
                  <span>Show More</span>
                </div>
              </div>

              <div className="comment">
                <div className="comment-heading flex">
                  <h4>120 Comments</h4>
                  <h4>
                    {" "}
                    <i className="fa fa-list-ul"></i> <label>SORT BY</label>{" "}
                  </h4>
                </div>
              </div>

              <div className="details comment_self flex">
                <div className="img">
                  <img src="assets/images/logo.png" alt=""></img>
                </div>
                <div className="heading">
                  <input type="text" placeholder="Add a comment...."></input>
                </div>
              </div>

              <div className="details_Comment">
                <div className="details flex">
                  <div className="img">
                    <img src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-people-victoruler-flat-victoruler-5.png" />
                  </div>
                  <div className="heading">
                    <h4>
                      Matheus Silva <span>2 months ago</span>{" "}
                    </h4>
                    <p>
                      {" "}
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <div className="comment-like flex">
                      <div className="icon">
                        <i className="fa fa-thumbs-up"></i>
                        <label>5</label>
                      </div>
                      <div className="icon">
                        <i className="fa fa-thumbs-down"></i>
                        <label>DISLIKE</label>
                      </div>
                      <div className="icon">
                        <label>REPLY</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="replay">
                <label className="tags">
                  {" "}
                  <i className="fa fa-caret-up"></i> Hide Reply{" "}
                </label>
                <div className="replay-details flex">
                  <div className="img">
                    <img src="assets/images/logo.png" alt=""></img>
                  </div>
                  <div className="text">
                    <h4>
                      {" "}
                      <label>GorkCoder</label> <span>2 months ago</span>{" "}
                    </h4>
                    <p>Thanks You</p>
                  </div>
                </div>
              </div>

              <div className="details_Comment no-replay">
                <div className="details flex">
                  <div className="img">
                    <h1>M</h1>
                  </div>
                  <div className="heading">
                    <h4>
                      Matheus Silva <span>2 months ago</span>{" "}
                    </h4>
                    <p>
                      {" "}
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <div className="comment-like flex">
                      <div className="icon">
                        <i className="fa fa-thumbs-up"></i>
                        <label>5</label>
                      </div>
                      <div className="icon">
                        <i className="fa fa-thumbs-down"></i>
                        <label>DISLIKE</label>
                      </div>
                      <div className="icon">
                        <label>REPLY</label>
                      </div>
                    </div>
                    <label className="tags">
                      {" "}
                      <i className="fa fa-caret-down"> </i> View Replay From
                      GorkCoder{" "}
                    </label>
                  </div>
                </div>
              </div>
              <div className="details_Comment no-replay">
                <div className="details flex">
                  <div className="img background1">
                    <h1>A</h1>
                  </div>
                  <div className="heading">
                    <h4>
                      Matheus Silva <span>2 months ago</span>{" "}
                    </h4>
                    <p>
                      {" "}
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <div className="comment-like flex">
                      <div className="icon">
                        <i className="fa fa-thumbs-up"></i>
                        <label>5</label>
                      </div>
                      <div className="icon">
                        <i className="fa fa-thumbs-down"></i>
                        <label>DISLIKE</label>
                      </div>
                      <div className="icon">
                        <label>REPLY</label>
                      </div>
                    </div>
                    <label className="tags">
                      {" "}
                      <i className="fa fa-caret-down"> </i> View Replay From
                      GorkCoder{" "}
                    </label>
                  </div>
                </div>
              </div>
              <div className="details_Comment no-replay">
                <div className="details flex">
                  <div className="img background2">
                    <h1>S</h1>
                  </div>
                  <div className="heading">
                    <h4>
                      Matheus Silva <span>2 months ago</span>{" "}
                    </h4>
                    <p>
                      {" "}
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <div className="comment-like flex">
                      <div className="icon">
                        <i className="fa fa-thumbs-up"></i>
                        <label>5</label>
                      </div>
                      <div className="icon">
                        <i className="fa fa-thumbs-down"></i>
                        <label>DISLIKE</label>
                      </div>
                      <div className="icon">
                        <label>REPLY</label>
                      </div>
                    </div>
                    <label className="tags">
                      {" "}
                      <i className="fa fa-caret-down"> </i> View Replay From
                      GorkCoder{" "}
                    </label>
                  </div>
                </div>
              </div>
              <div className="details_Comment no-replay">
                <div className="details flex">
                  <div className="img background3">
                    <h1>Q</h1>
                  </div>
                  <div className="heading">
                    <h4>
                      Matheus Silva <span>2 months ago</span>{" "}
                    </h4>
                    <p>
                      {" "}
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <div className="comment-like flex">
                      <div className="icon">
                        <i className="fa fa-thumbs-up"></i>
                        <label>5</label>
                      </div>
                      <div className="icon">
                        <i className="fa fa-thumbs-down"></i>
                        <label>DISLIKE</label>
                      </div>
                      <div className="icon">
                        <label>REPLY</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="replay">
                <label className="tags">
                  {" "}
                  <i className="fa fa-caret-up"></i> Hide Reply{" "}
                </label>
                <div className="replay-details flex">
                  <div className="img">
                    <img src="assets/images/logo.png" alt=""></img>
                  </div>
                  <div className="text">
                    <h4>
                      {" "}
                      <label>GorkCoder</label> <span>2 months ago</span>{" "}
                    </h4>
                    <p>Thanks You</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="right_content">
              <button className="chat">Show Chat Replay</button>

              <div className="tags">
                <label className="tags-bg">All</label>
                <label className="tags-bg">Web Design</label>
                <label className="tags-bg">Frontend</label>
                <label className="tags-bg">Backend</label>
              </div>

              <div className="video_items vide_sidebar flex">
                <a href="#">
                  <img src="assets/images/video_images/back5.jpg" alt=""></img>
                </a>
                <div className="details">
                  <p>How to make hotel booking website with HTML css....</p>
                  <span>
                    GorkCoder <i className="fa fa-cricle-check"> </i>{" "}
                  </span>
                  <span>56.7M . 1 Week ago</span>
                </div>
              </div>
              <div className="video_items vide_sidebar flex">
                <a href="#">
                  <img src="assets/images/video_images/back6.jpg" alt=""></img>
                </a>
                <div className="details">
                  <p>How to make hotel booking website with HTML css....</p>
                  <span>
                    GorkCoder <i className="fa fa-cricle-check"> </i>{" "}
                  </span>
                  <span>56.7M . 1 Week ago</span>
                </div>
              </div>
              <div className="video_items vide_sidebar flex">
                <a href="#">
                  <img src="assets/images/video_images/back7.jpg" alt=""></img>
                </a>
                <div className="details">
                  <p>How to make hotel booking website with HTML css....</p>
                  <span>
                    GorkCoder <i className="fa fa-cricle-check"> </i>{" "}
                  </span>
                  <span>56.7M . 1 Week ago</span>
                </div>
              </div>
              <div className="video_items vide_sidebar flex">
                <a href="#">
                  <img src="assets/images/video_images/back8.jpg" alt=""></img>
                </a>
                <div className="details">
                  <p>How to make hotel booking website with HTML css....</p>
                  <span>
                    GorkCoder <i className="fa fa-cricle-check"> </i>{" "}
                  </span>
                  <span>56.7M . 1 Week ago</span>
                </div>
              </div>
              <div className="video_items vide_sidebar flex">
                <a href="#">
                  <img src="assets/images/video_images/back9.jpg" alt=""></img>
                </a>
                <div className="details">
                  <p>How to make hotel booking website with HTML css....</p>
                  <span>
                    GorkCoder <i className="fa fa-cricle-check"> </i>{" "}
                  </span>
                  <span>56.7M . 1 Week ago</span>
                </div>
              </div>
              <div className="video_items vide_sidebar flex">
                <a href="#">
                  <img src="assets/images/video_images/back10.jpg" alt=""></img>
                </a>
                <div className="details">
                  <p>How to make hotel booking website with HTML css....</p>
                  <span>
                    GorkCoder <i className="fa fa-cricle-check"> </i>{" "}
                  </span>
                  <span>56.7M . 1 Week ago</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Watch;
