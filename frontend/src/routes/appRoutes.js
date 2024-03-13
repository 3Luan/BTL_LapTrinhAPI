import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Watch from "../pages/watch/Watch";
import Header from "../components/header/Header";
import SideBar from "../components/sidebar/SideBar";
import Search from "../components/search/Search";
import Trending from "../pages/trending/Trending";
import NotFound from "../pages/notfound/NotFound";
import Profile from "../pages/profile/Profile";
import Community from "../pages/community/Community";
import { useSelector } from "react-redux";
import History from "../pages/history/History";

const AppRoutes = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <>
      <Header></Header>
      <SideBar></SideBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch/:videoId" element={<Watch />} />
        <Route path="/trending" element={<Trending />} />

        {auth.auth ? (
          <>
            <Route path="/profile/:userId" element={<Profile />} />
            <Route path="/community" element={<Community />} />
            <Route path="/history" element={<History />} />
          </>
        ) : null}

        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
