import React, { useEffect, useState } from "react";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { getVideosBySearch } from "../../redux/videopopular/videoPopularAction";
import { Popup } from "semantic-ui-react";
import Login from "../login/Login";
import { handleLogout } from "../../redux/auth/authAction";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useSelector((state) => state.auth);
  const [keywordSearch, setKeywordSearch] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleClose = () => {
    setShowPopup(false);
    setShowLoginModal(false);
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

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && keywordSearch !== "") {
      dispatch(getVideosBySearch(keywordSearch));
      navigate(`/search?query=${keywordSearch}`);
    }
  };

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
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          ></input>
          <i
            className="fa-solid fa-magnifying-glass"
            onClick={() => handleSearch()}
          ></i>
        </div>
        {/* <Popup
          open={isSearchFocused}
          onOpen={() => setShowPopup(true)}
          onClose={() => setShowPopup(false)}
          position="bottom left" // hoặc position="bottom center"
          className="custom-popup"
        >
          <Popup.Content>
            <button
              onClick={() => {
                handleClickLogout();
              }}
              className="text-white"
            >
              gợi ý tìm kiếm
            </button>
          </Popup.Content>
        </Popup> */}

        <div className="user">
          <div className="icon">
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
              </div>
            </>
          )}
        </div>
      </div>
      <Login show={showLoginModal} handleClose={handleClose} />
    </header>
  );
};

export default Header;
