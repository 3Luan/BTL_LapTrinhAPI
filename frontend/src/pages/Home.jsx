import React from "react";
import "./home.css";
const Home = () => {
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
                <a href="#" class="nav_link navtop active">
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

      <main>
        <section class="video_content grid">
          <div class="video_items">
            <a href="/watch">
              <img src="assets/images/video_images/back5.jpg" alt=""></img>
            </a>
            <div class="details flex">
              <div class="img">
                <img src="assets/images/logo.png" alt=""></img>
              </div>
              <div class="heading">
                <p>How to make Hotel Booking Website With HTML CSS ......</p>
                <span>
                  GorkCoder <i class="fa fa-circle-check"></i>{" "}
                </span>
                <span>56.7M .1 Week ago</span>
              </div>
            </div>
          </div>
          <div class="video_items">
            <a href="single-page.html">
              <img src="assets/images/video_images/back1.jpg" alt=""></img>
            </a>
            <div class="details flex">
              <div class="img">
                <img src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-people-victoruler-flat-victoruler-5.png" />
              </div>
              <div class="heading">
                <p>How to make Hotel Booking Website With HTML CSS ......</p>
                <span>
                  GorkCoder <i class="fa fa-circle-check"></i>{" "}
                </span>
                <span>56.7M .1 Week ago</span>
              </div>
            </div>
          </div>
          <div class="video_items">
            <a href="single-page.html">
              <img src="assets/images/video_images/back3.jpg" alt=""></img>
            </a>
            <div class="details flex">
              <div class="img">
                <img src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-occupation-and-people-victoruler-flat-victoruler.png" />
              </div>
              <div class="heading">
                <p>How to make Hotel Booking Website With HTML CSS ......</p>
                <span>
                  GorkCoder <i class="fa fa-circle-check"></i>{" "}
                </span>
                <span>56.7M .1 Week ago</span>
              </div>
            </div>
          </div>
          <div class="video_items">
            <a href="single-page.html">
              <img src="assets/images/video_images/back4.jpg" alt=""></img>
            </a>
            <div class="details flex">
              <div class="img">
                <img src="https://img.icons8.com/external-victoruler-linear-colour-victoruler/64/000000/external-boy-children-avatar-victoruler-linear-colour-victoruler-2.png" />
              </div>
              <div class="heading">
                <p>How to make Hotel Booking Website With HTML CSS ......</p>
                <span>
                  GorkCoder <i class="fa fa-circle-check"></i>{" "}
                </span>
                <span>56.7M .1 Week ago</span>
              </div>
            </div>
          </div>
          <div class="video_items">
            <a href="single-page.html">
              <img src="assets/images/video_images/back6.jpg" alt=""></img>
            </a>
            <div class="details flex">
              <div class="img">
                <img src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-children-avatar-victoruler-flat-victoruler-12.png" />
              </div>
              <div class="heading">
                <p>How to make Hotel Booking Website With HTML CSS ......</p>
                <span>
                  GorkCoder <i class="fa fa-circle-check"></i>{" "}
                </span>
                <span>56.7M .1 Week ago</span>
              </div>
            </div>
          </div>
          <div class="video_items">
            <a href="single-page.html">
              <img src="assets/images/video_images/back5.jpg" alt=""></img>
            </a>
            <div class="details flex">
              <div class="img">
                <img src="assets/images/logo.png" alt=""></img>
              </div>
              <div class="heading">
                <p>How to make Hotel Booking Website With HTML CSS ......</p>
                <span>
                  GorkCoder <i class="fa fa-circle-check"></i>{" "}
                </span>
                <span>56.7M .1 Week ago</span>
              </div>
            </div>
          </div>
          <div class="video_items">
            <a href="single-page.html">
              <img src="assets/images/video_images/back1.jpg" alt=""></img>
            </a>
            <div class="details flex">
              <div class="img">
                <img src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-people-victoruler-flat-victoruler-5.png" />
              </div>
              <div class="heading">
                <p>How to make Hotel Booking Website With HTML CSS ......</p>
                <span>
                  GorkCoder <i class="fa fa-circle-check"></i>{" "}
                </span>
                <span>56.7M .1 Week ago</span>
              </div>
            </div>
          </div>
          <div class="video_items">
            <a href="single-page.html">
              <img src="assets/images/video_images/back3.jpg" alt=""></img>
            </a>
            <div class="details flex">
              <div class="img">
                <img src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-occupation-and-people-victoruler-flat-victoruler.png" />
              </div>
              <div class="heading">
                <p>How to make Hotel Booking Website With HTML CSS ......</p>
                <span>
                  GorkCoder <i class="fa fa-circle-check"></i>{" "}
                </span>
                <span>56.7M .1 Week ago</span>
              </div>
            </div>
          </div>
          <div class="video_items">
            <a href="single-page.html">
              <img src="assets/images/video_images/back4.jpg" alt=""></img>
            </a>
            <div class="details flex">
              <div class="img">
                <img src="https://img.icons8.com/external-victoruler-linear-colour-victoruler/64/000000/external-boy-children-avatar-victoruler-linear-colour-victoruler-2.png" />
              </div>
              <div class="heading">
                <p>How to make Hotel Booking Website With HTML CSS ......</p>
                <span>
                  GorkCoder <i class="fa fa-circle-check"></i>{" "}
                </span>
                <span>56.7M .1 Week ago</span>
              </div>
            </div>
          </div>
          <div class="video_items">
            <a href="single-page.html">
              <img src="assets/images/video_images/back6.jpg" alt=""></img>
            </a>
            <div class="details flex">
              <div class="img">
                <img src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-children-avatar-victoruler-flat-victoruler-12.png" />
              </div>
              <div class="heading">
                <p>How to make Hotel Booking Website With HTML CSS ......</p>
                <span>
                  GorkCoder <i class="fa fa-circle-check"></i>{" "}
                </span>
                <span>56.7M .1 Week ago</span>
              </div>
            </div>
          </div>
          <div class="video_items">
            <a href="single-page.html">
              <img src="assets/images/video_images/back5.jpg" alt=""></img>
            </a>
            <div class="details flex">
              <div class="img">
                <img src="assets/images/logo.png" alt=""></img>
              </div>
              <div class="heading">
                <p>How to make Hotel Booking Website With HTML CSS ......</p>
                <span>
                  GorkCoder <i class="fa fa-circle-check"></i>{" "}
                </span>
                <span>56.7M .1 Week ago</span>
              </div>
            </div>
          </div>
          <div class="video_items">
            <a href="single-page.html">
              <img src="assets/images/video_images/back1.jpg" alt=""></img>
            </a>
            <div class="details flex">
              <div class="img">
                <img src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-people-victoruler-flat-victoruler-5.png" />
              </div>
              <div class="heading">
                <p>How to make Hotel Booking Website With HTML CSS ......</p>
                <span>
                  GorkCoder <i class="fa fa-circle-check"></i>{" "}
                </span>
                <span>56.7M .1 Week ago</span>
              </div>
            </div>
          </div>
          <div class="video_items">
            <a href="single-page.html">
              <img src="assets/images/video_images/back3.jpg" alt=""></img>
            </a>
            <div class="details flex">
              <div class="img">
                <img src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-occupation-and-people-victoruler-flat-victoruler.png" />
              </div>
              <div class="heading">
                <p>How to make Hotel Booking Website With HTML CSS ......</p>
                <span>
                  GorkCoder <i class="fa fa-circle-check"></i>{" "}
                </span>
                <span>56.7M .1 Week ago</span>
              </div>
            </div>
          </div>
          <div class="video_items">
            <a href="single-page.html">
              <img src="assets/images/video_images/back4.jpg" alt=""></img>
            </a>
            <div class="details flex">
              <div class="img">
                <img src="https://img.icons8.com/external-victoruler-linear-colour-victoruler/64/000000/external-boy-children-avatar-victoruler-linear-colour-victoruler-2.png" />
              </div>
              <div class="heading">
                <p>How to make Hotel Booking Website With HTML CSS ......</p>
                <span>
                  GorkCoder <i class="fa fa-circle-check"></i>{" "}
                </span>
                <span>56.7M .1 Week ago</span>
              </div>
            </div>
          </div>
          <div class="video_items">
            <a href="single-page.html">
              <img src="assets/images/video_images/back6.jpg" alt=""></img>
            </a>
            <div class="details flex">
              <div class="img">
                <img src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-children-avatar-victoruler-flat-victoruler-12.png" />
              </div>
              <div class="heading">
                <p>How to make Hotel Booking Website With HTML CSS ......</p>
                <span>
                  GorkCoder <i class="fa fa-circle-check"></i>{" "}
                </span>
                <span>56.7M .1 Week ago</span>
              </div>
            </div>
          </div>
          <div class="video_items">
            <a href="single-page.html">
              <img src="assets/images/video_images/back5.jpg" alt=""></img>
            </a>
            <div class="details flex">
              <div class="img">
                <img src="assets/images/logo.png" alt=""></img>
              </div>
              <div class="heading">
                <p>How to make Hotel Booking Website With HTML CSS ......</p>
                <span>
                  GorkCoder <i class="fa fa-circle-check"></i>{" "}
                </span>
                <span>56.7M .1 Week ago</span>
              </div>
            </div>
          </div>
          <div class="video_items">
            <a href="single-page.html">
              <img src="assets/images/video_images/back1.jpg" alt=""></img>
            </a>
            <div class="details flex">
              <div class="img">
                <img src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-people-victoruler-flat-victoruler-5.png" />
              </div>
              <div class="heading">
                <p>How to make Hotel Booking Website With HTML CSS ......</p>
                <span>
                  GorkCoder <i class="fa fa-circle-check"></i>{" "}
                </span>
                <span>56.7M .1 Week ago</span>
              </div>
            </div>
          </div>
          <div class="video_items">
            <a href="single-page.html">
              <img src="assets/images/video_images/back3.jpg" alt=""></img>
            </a>
            <div class="details flex">
              <div class="img">
                <img src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-occupation-and-people-victoruler-flat-victoruler.png" />
              </div>
              <div class="heading">
                <p>How to make Hotel Booking Website With HTML CSS ......</p>
                <span>
                  GorkCoder <i class="fa fa-circle-check"></i>{" "}
                </span>
                <span>56.7M .1 Week ago</span>
              </div>
            </div>
          </div>
          <div class="video_items">
            <a href="single-page.html">
              <img src="assets/images/video_images/back4.jpg" alt=""></img>
            </a>
            <div class="details flex">
              <div class="img">
                <img src="https://img.icons8.com/external-victoruler-linear-colour-victoruler/64/000000/external-boy-children-avatar-victoruler-linear-colour-victoruler-2.png" />
              </div>
              <div class="heading">
                <p>How to make Hotel Booking Website With HTML CSS ......</p>
                <span>
                  GorkCoder <i class="fa fa-circle-check"></i>{" "}
                </span>
                <span>56.7M .1 Week ago</span>
              </div>
            </div>
          </div>
          <div class="video_items">
            <a href="single-page.html">
              <img src="assets/images/video_images/back6.jpg" alt=""></img>
            </a>
            <div class="details flex">
              <div class="img">
                <img src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-children-avatar-victoruler-flat-victoruler-12.png" />
              </div>
              <div class="heading">
                <p>How to make Hotel Booking Website With HTML CSS ......</p>
                <span>
                  GorkCoder <i class="fa fa-circle-check"></i>{" "}
                </span>
                <span>56.7M .1 Week ago</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
