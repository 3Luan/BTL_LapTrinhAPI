import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import PlayVideo from "../pages/PlayVideo";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch" element={<PlayVideo />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
