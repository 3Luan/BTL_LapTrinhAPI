import React from "react";
import "./home.css";

import "./playvideo.css";

const PlayVideo = () => {
  return (
    <>
      <header class="header">
        <div class="header_container">
          <div class="none"> </div>
          <div class="search">
            <input type="text" placeholder="Search"></input>
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>

          <div class="user">
            <div class="icon">
              <i class="fa-solid fa-video"></i>
              <i class="fa-solid fa-grip"></i>
              <i class="fa-solid fa-bell"></i>
            </div>

            <div class="img">
              <img src="assets/images/logo.png" alt=""></img>
            </div>
          </div>

          <div class="toggle">
            <i class="fa-solid fa-bars" id="header-toggle"></i>
          </div>
        </div>
      </header>

      <section class="nav" id="navbar">
        <nav class="nav_container">
          <div>
            <a href="#" class="nav_link nav_logo ">
              <i class="fa-solid fa-bars nav_icon"></i>
              <span class="logo_name">
                <i class="fab fa-youtube"></i>
                Youtube
              </span>
            </a>

            <div class="nav_list">
              <div class="nav_items navtop">
                <a href="/" class="nav_link navtop active">
                  <i class="fa fa-house nav_icon"></i>
                  <span class="nav_name">Home</span>
                </a>
                <a href="#" class="nav_link navtop">
                  <i class="fa fa-compass nav_icon"></i>
                  <span class="nav_name">Explore</span>
                </a>
                <a href="#" class="nav_link navtop">
                  <i class="fa-brands fa-tiktok nav_icon"></i>
                  <span class="nav_name">Short Video</span>
                </a>
                <a href="#" class="nav_link navtop">
                  <i class="fa-solid fa-users nav_icon"></i>
                  <span class="nav_name">Channel</span>
                </a>
                <a href="#" class="nav_link navtop">
                  <i class="fa-solid fa-video nav_icon"></i>
                  <span class="nav_name">Library</span>
                </a>
                <a href="#" class="nav_link navtop">
                  <i class="fa-solid fa-clock-rotate-left nav_icon"></i>
                  <span class="nav_name">History</span>
                </a>
                <a href="#" class="nav_link navtop">
                  <i class="fa-solid fa-thumbs-up nav_icon"></i>
                  <span class="nav_name">Like</span>
                </a>

                <div class="nav_dropdown">
                  <a href="#" class="nav_link">
                    <i class="fa-solid fa-chevron-down nav_icon"></i>
                    <span class="nav_name">Show More</span>
                  </a>

                  <div class="nav_dropdown-collapse">
                    <div class="nav_dropdown-content">
                      <a href="#" class="nav_dropdown-item">
                        Grid Box
                      </a>
                      <a href="#" class="nav_dropdown-item">
                        Frontend Design
                      </a>
                      <a href="#" class="nav_dropdown-item">
                        Backend Design
                      </a>
                    </div>
                  </div>
                </div>

                <a href="#" class="nav_link">
                  <i class="fa-solid fa-comment nav_icon"></i>
                  <span class="nav_name">Messages</span>
                </a>
              </div>

              <div class="nav_items subscribe-container">
                <h3 class="nav_subititle">SUBSCRIPTIONS</h3>

                <a href="#" class="nav_link">
                  <img
                    class="subscribe"
                    src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-people-victoruler-flat-victoruler-5.png"
                    alt=""
                  ></img>
                  <span class="nav_name">GorkCoder</span>
                </a>
                <a href="#" class="nav_link">
                  <img
                    class="subscribe"
                    src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-occupation-and-people-victoruler-flat-victoruler.png"
                  />
                  <span class="nav_name">React Maste</span>
                </a>
                <a href="#" class="nav_link">
                  <img
                    class="subscribe"
                    src="https://img.icons8.com/external-victoruler-linear-colour-victoruler/64/000000/external-boy-children-avatar-victoruler-linear-colour-victoruler-2.png"
                  />
                  <span class="nav_name">Backend Development</span>
                </a>
                <a href="#" class="nav_link">
                  <img
                    class="subscribe"
                    src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-children-avatar-victoruler-flat-victoruler-12.png"
                  />
                  <span class="nav_name">Frontend Development</span>
                </a>

                <div class="nav_dropdown">
                  <a href="#" class="nav_link">
                    <i class="fa-solid fa-chevron-down nav_icon"></i>
                    <span class="nav_name">Show 3 More</span>
                  </a>

                  <div class="nav_dropdown-collapse nav_dropdown-second">
                    <div class="nav_dropdown-content">
                      <a href="#" class="nav_dropdown-items">
                        <img
                          class="subscribe"
                          src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-children-avatar-victoruler-flat-victoruler-12.png"
                        />
                        <span class="nav_name">Frontend Design</span>
                      </a>
                      <a href="#" class="nav_dropdown-items">
                        <img
                          class="subscribe"
                          src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-children-avatar-victoruler-flat-victoruler-12.png"
                        />
                        <span class="nav_name">Backend Design</span>
                      </a>
                      <a href="#" class="nav_dropdown-items">
                        <img
                          class="subscribe"
                          src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-children-avatar-victoruler-flat-victoruler-12.png"
                        />
                        <span class="nav_name">Backend Design</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </section>

      <main class="single_pages">
        <section class="video_items flex">
          <div class="left">
            <div class="left_content">
              <video controls>
                <source
                  src="/assets/videos/video1.mp4"
                  type="video/mp4"
                  poster="images/video_images/back1.jpg"
                ></source>
              </video>

              <div class="tag">
                <label class="tags">#web #webdesign #Frontend </label>
                <p>How to make Hotel Booking Website With HTML CSS ......</p>
              </div>
              <div class="view flex2 border_bottom">
                <div class="view-text">
                  <span>693,348 view Premiered 53 minutes ago</span>
                </div>

                <div class="flex">
                  <div class="icon">
                    <i class="fa fa-thumbs-up"></i>
                    <label>225k</label>
                  </div>
                  <div class="icon">
                    <i class="fa fa-thumbs-down"></i>
                    <label>DISLIKE</label>
                  </div>
                  <div class="icon">
                    <i class="fa fa-share"></i>
                    <label>SHARE</label>
                  </div>
                  <div class="icon">
                    <i class="fa fa-scissors"></i>
                    <label>CLIP</label>
                  </div>
                  <div class="icon">
                    <i class="fa fa-bookmark"></i>
                    <label>SAVE</label>
                  </div>
                  <div class="icon">
                    <i class="fa fa-ellipsis"></i>
                  </div>
                </div>
              </div>

              <div class="details flex border_bottom">
                <div class="img">
                  <img src="assets/images/logo.png" alt=""></img>
                </div>
                <div class="heading">
                  <h4>
                    GorkCoder <i class="fa fa-circle-check"></i>{" "}
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

              <div class="comment">
                <div class="comment-heading flex">
                  <h4>120 Comments</h4>
                  <h4>
                    {" "}
                    <i class="fa fa-list-ul"></i> <label>SORT BY</label>{" "}
                  </h4>
                </div>
              </div>

              <div class="details comment_self flex">
                <div class="img">
                  <img src="assets/images/logo.png" alt=""></img>
                </div>
                <div class="heading">
                  <input type="text" placeholder="Add a comment...."></input>
                </div>
              </div>

              <div class="details_Comment">
                <div class="details flex">
                  <div class="img">
                    <img src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-people-victoruler-flat-victoruler-5.png" />
                  </div>
                  <div class="heading">
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
                    <div class="comment-like flex">
                      <div class="icon">
                        <i class="fa fa-thumbs-up"></i>
                        <label>5</label>
                      </div>
                      <div class="icon">
                        <i class="fa fa-thumbs-down"></i>
                        <label>DISLIKE</label>
                      </div>
                      <div class="icon">
                        <label>REPLY</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="replay">
                <label class="tags">
                  {" "}
                  <i class="fa fa-caret-up"></i> Hide Reply{" "}
                </label>
                <div class="replay-details flex">
                  <div class="img">
                    <img src="assets/images/logo.png" alt=""></img>
                  </div>
                  <div class="text">
                    <h4>
                      {" "}
                      <label>GorkCoder</label> <span>2 months ago</span>{" "}
                    </h4>
                    <p>Thanks You</p>
                  </div>
                </div>
              </div>

              <div class="details_Comment no-replay">
                <div class="details flex">
                  <div class="img">
                    <h1>M</h1>
                  </div>
                  <div class="heading">
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
                    <div class="comment-like flex">
                      <div class="icon">
                        <i class="fa fa-thumbs-up"></i>
                        <label>5</label>
                      </div>
                      <div class="icon">
                        <i class="fa fa-thumbs-down"></i>
                        <label>DISLIKE</label>
                      </div>
                      <div class="icon">
                        <label>REPLY</label>
                      </div>
                    </div>
                    <label class="tags">
                      {" "}
                      <i class="fa fa-caret-down"> </i> View Replay From
                      GorkCoder{" "}
                    </label>
                  </div>
                </div>
              </div>
              <div class="details_Comment no-replay">
                <div class="details flex">
                  <div class="img background1">
                    <h1>A</h1>
                  </div>
                  <div class="heading">
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
                    <div class="comment-like flex">
                      <div class="icon">
                        <i class="fa fa-thumbs-up"></i>
                        <label>5</label>
                      </div>
                      <div class="icon">
                        <i class="fa fa-thumbs-down"></i>
                        <label>DISLIKE</label>
                      </div>
                      <div class="icon">
                        <label>REPLY</label>
                      </div>
                    </div>
                    <label class="tags">
                      {" "}
                      <i class="fa fa-caret-down"> </i> View Replay From
                      GorkCoder{" "}
                    </label>
                  </div>
                </div>
              </div>
              <div class="details_Comment no-replay">
                <div class="details flex">
                  <div class="img background2">
                    <h1>S</h1>
                  </div>
                  <div class="heading">
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
                    <div class="comment-like flex">
                      <div class="icon">
                        <i class="fa fa-thumbs-up"></i>
                        <label>5</label>
                      </div>
                      <div class="icon">
                        <i class="fa fa-thumbs-down"></i>
                        <label>DISLIKE</label>
                      </div>
                      <div class="icon">
                        <label>REPLY</label>
                      </div>
                    </div>
                    <label class="tags">
                      {" "}
                      <i class="fa fa-caret-down"> </i> View Replay From
                      GorkCoder{" "}
                    </label>
                  </div>
                </div>
              </div>
              <div class="details_Comment no-replay">
                <div class="details flex">
                  <div class="img background3">
                    <h1>Q</h1>
                  </div>
                  <div class="heading">
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
                    <div class="comment-like flex">
                      <div class="icon">
                        <i class="fa fa-thumbs-up"></i>
                        <label>5</label>
                      </div>
                      <div class="icon">
                        <i class="fa fa-thumbs-down"></i>
                        <label>DISLIKE</label>
                      </div>
                      <div class="icon">
                        <label>REPLY</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="replay">
                <label class="tags">
                  {" "}
                  <i class="fa fa-caret-up"></i> Hide Reply{" "}
                </label>
                <div class="replay-details flex">
                  <div class="img">
                    <img src="assets/images/logo.png" alt=""></img>
                  </div>
                  <div class="text">
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

          <div class="right">
            <div class="right_content">
              <button class="chat">Show Chat Replay</button>

              <div class="tags">
                <label class="tags-bg">All</label>
                <label class="tags-bg">Web Design</label>
                <label class="tags-bg">Frontend</label>
                <label class="tags-bg">Backend</label>
              </div>

              <div class="video_items vide_sidebar flex">
                <a href="#">
                  <img src="assets/images/video_images/back5.jpg" alt=""></img>
                </a>
                <div class="details">
                  <p>How to make hotel booking website with HTML css....</p>
                  <span>
                    GorkCoder <i class="fa fa-cricle-check"> </i>{" "}
                  </span>
                  <span>56.7M . 1 Week ago</span>
                </div>
              </div>
              <div class="video_items vide_sidebar flex">
                <a href="#">
                  <img src="assets/images/video_images/back6.jpg" alt=""></img>
                </a>
                <div class="details">
                  <p>How to make hotel booking website with HTML css....</p>
                  <span>
                    GorkCoder <i class="fa fa-cricle-check"> </i>{" "}
                  </span>
                  <span>56.7M . 1 Week ago</span>
                </div>
              </div>
              <div class="video_items vide_sidebar flex">
                <a href="#">
                  <img src="assets/images/video_images/back7.jpg" alt=""></img>
                </a>
                <div class="details">
                  <p>How to make hotel booking website with HTML css....</p>
                  <span>
                    GorkCoder <i class="fa fa-cricle-check"> </i>{" "}
                  </span>
                  <span>56.7M . 1 Week ago</span>
                </div>
              </div>
              <div class="video_items vide_sidebar flex">
                <a href="#">
                  <img src="assets/images/video_images/back8.jpg" alt=""></img>
                </a>
                <div class="details">
                  <p>How to make hotel booking website with HTML css....</p>
                  <span>
                    GorkCoder <i class="fa fa-cricle-check"> </i>{" "}
                  </span>
                  <span>56.7M . 1 Week ago</span>
                </div>
              </div>
              <div class="video_items vide_sidebar flex">
                <a href="#">
                  <img src="assets/images/video_images/back9.jpg" alt=""></img>
                </a>
                <div class="details">
                  <p>How to make hotel booking website with HTML css....</p>
                  <span>
                    GorkCoder <i class="fa fa-cricle-check"> </i>{" "}
                  </span>
                  <span>56.7M . 1 Week ago</span>
                </div>
              </div>
              <div class="video_items vide_sidebar flex">
                <a href="#">
                  <img src="assets/images/video_images/back10.jpg" alt=""></img>
                </a>
                <div class="details">
                  <p>How to make hotel booking website with HTML css....</p>
                  <span>
                    GorkCoder <i class="fa fa-cricle-check"> </i>{" "}
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

export default PlayVideo;
