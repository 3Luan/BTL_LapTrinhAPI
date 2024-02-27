import React, { useState } from "react";
import "./header.css";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getVideosBySearch } from "../../redux/videopopular/videoPopularAction";
import { Popup } from "semantic-ui-react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Login from "../login/Login";

const Header = () => {
  const dispatch = useDispatch();
  const [keywordSearch, setKeywordSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const [isPopupOpen, setPopupOpen] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSearch = () => {
    if (keywordSearch) {
      dispatch(getVideosBySearch(keywordSearch));
      navigate(`/search?query=${keywordSearch}`);
    }
  };

  React.useEffect(() => {
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

          <div className="img">
            <Popup
              trigger={
                <img
                  src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
                  alt=""
                />
              }
              on="click"
              open={isPopupOpen}
              onOpen={() => setPopupOpen(true)}
              onClose={() => setPopupOpen(false)}
              position="bottom right"
              className="custom-popup" // Add a class for custom styling
            >
              {/* Content of the popup goes here */}
              <Popup.Content>
                <div>Trang cá nhân</div>
                <Button
                  variant="primary"
                  onClick={() => {
                    handleShow();
                    setPopupOpen(false);
                  }}
                >
                  Launch demo modal
                </Button>
                <hr />
                <div>Đăng xuất</div>
              </Popup.Content>
            </Popup>

            <button onClick={() => console.log("onclick")}>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title className="text-center">
                    <div className="login_google">
                      <img src="assets/images/logo_google.png" alt=""></img>
                      <span>Tiếp tục với Google</span>
                    </div>
                  </Modal.Title>
                </Modal.Header>
              </Modal>
            </button>
          </div>
        </div>
        {/* <div className="toggle">
          <i className="fa-solid fa-bars" id="header-toggle"></i>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
