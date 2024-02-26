import React, { useState } from "react";
import "./header.css";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getVideosBySearch } from "../../redux/videopopular/videoPopularAction";

const Header = () => {
  const dispatch = useDispatch();
  const [keywordSearch, setKeywordSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

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
            <img
              src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
              alt=""
            ></img>
          </div>
        </div>

        <div className="toggle">
          <i className="fa-solid fa-bars" id="header-toggle"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
