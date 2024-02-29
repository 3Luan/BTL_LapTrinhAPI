import React, { useEffect, useState } from "react";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { getVideosBySearch } from "../../redux/videopopular/videoPopularAction";
import { Popup } from "semantic-ui-react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Login from "../login/Login";
import { handleLogout } from "../../redux/auth/authAction";

const Header = () => {
  const dispatch = useDispatch();
  const [keywordSearch, setKeywordSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const [showPopup, setShowPopup] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const auth = useSelector((state) => state.auth);

  const handleClose = () => {
    setShowPopup(false);
    setShowLoginModal(false);
  };

  const handleShow = () => {
    setShowPopup(true);
    setShowLoginModal(true);
  };

  const handleShowLoginModal = () => {
    setShowLoginModal(true);
  };

  const handleSearch = () => {
    if (keywordSearch) {
      dispatch(getVideosBySearch(keywordSearch));
      navigate(`/search?query=${keywordSearch}`);
    }
  };

  useEffect(() => {
    const query = new URLSearchParams(location.search).get("query");
    if (query) {
      dispatch(getVideosBySearch(query));
      setKeywordSearch(query);
    }
  }, [location.search, dispatch]);

  // Xử lý sự kiện khi nhấn enter
  const handleKeyPress = (event) => {
    if (event.key === "Enter" && keywordSearch !== "") {
      dispatch(getVideosBySearch(keywordSearch));
      navigate(`/search?query=${keywordSearch}`);
    }
  };

  // Xử lý đăng xuất
  const handleClickLogout = () => {
    const confirm = window.confirm("Bạn có chắc chắn đăng xuất không?");
    if (confirm) {
      dispatch(handleLogout());
    }
  };
  return (
    <header className="header">
      <div className="header_container">
        <div className="none"> </div>
        <div className="search">
          <input
            type="text"
            placeholder="Tìm kiếm"
            value={keywordSearch}
            onChange={(e) => setKeywordSearch(e.target.value)}
            onKeyDown={handleKeyPress}
          ></input>
          <i
            className="fa-solid fa-magnifying-glass"
            onClick={() => handleSearch()}
          ></i>
        </div>

        <div className="user">
          <div className="icon">
            <i className="fa-solid fa-video"></i>
            <i className="fa-solid fa-grip"></i>
            <i className="fa-solid fa-bell"></i>
          </div>

          {auth.auth ? (
            <>
              <div className="img-avatar">
                <Popup
                  trigger={<img src={auth.avatar} alt="" />}
                  on="click"
                  open={showPopup}
                  onOpen={() => setShowPopup(true)}
                  onClose={() => setShowPopup(false)}
                  position="bottom right"
                  className="custom-popup"
                >
                  <Popup.Content>
                    <NavLink to={`/profile/${auth.id}`} className="text-white">
                      Trang cá nhân
                    </NavLink>

                    <hr />
                    <button
                      onClick={() => {
                        handleClickLogout();
                      }}
                      className="text-white"
                    >
                      Đăng xuất
                    </button>
                  </Popup.Content>
                </Popup>
              </div>
            </>
          ) : (
            <>
              <div className="img-avatar">
                <Popup
                  trigger={
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
                      alt=""
                    />
                  }
                  on="click"
                  onOpen={() => handleShowLoginModal()}
                ></Popup>

                <Login show={showLoginModal} handleClose={handleClose} />
              </div>
            </>
          )}
        </div>
        {/* <div className="toggle">
          <i className="fa-solid fa-bars" id="header-toggle"></i>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
