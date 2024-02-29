import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Watch from "../pages/watch/Watch";
import Header from "../components/header/Header";
import SideBar from "../components/sidebar/SideBar";
import Search from "../components/search/Search";
import Trending from "../pages/trending/Trending";
import NotFound from "../pages/notfound/NotFound";
import Profile from "../pages/profile/Profile";

const AppRoutes = () => {
  return (
    <>
      <Header></Header>
      <SideBar></SideBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch/:videoId" element={<Watch />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
