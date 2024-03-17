import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Watch from "../pages/watch/Watch";
import Header from "../components/header/Header";
import SideBar from "../components/sidebar/SideBar";
import Trending from "../pages/trending/Trending";
import Profile from "../pages/profile/Profile";
import Community from "../pages/community/Community";
import { useSelector } from "react-redux";
import History from "../pages/history/History";
import PrivateRoutes from "./privateRoutes";
import Loading from "../components/Loading/Loading";
import Saved from "../pages/saved/Saved";

const AppRoutes = () => {
  const auth = useSelector((state) => state.auth);

  if (auth.isLoading) {
    return (
      <>
        <Header></Header>
        <SideBar></SideBar>
      </>
    );
  }
  return (
    <>
      <Header></Header>
      <SideBar></SideBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch/:videoId" element={<Watch />} />
        <Route path="/trending" element={<Trending />} />

        <Route
          path="/history"
          element={
            <PrivateRoutes>
              <History />
            </PrivateRoutes>
          }
        />

        <Route
          path="/saved"
          element={
            <PrivateRoutes>
              <Saved />
            </PrivateRoutes>
          }
        />

        <Route
          path="/profile/:userId"
          element={
            <PrivateRoutes>
              <Profile />
            </PrivateRoutes>
          }
        />

        <Route
          path="/community"
          element={
            <PrivateRoutes>
              <Community />
            </PrivateRoutes>
          }
        />

        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
