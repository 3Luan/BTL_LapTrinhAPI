import { useEffect } from "react";
import AppRoutes from "./routes/appRoutes";
import { useDispatch } from "react-redux";
import { handleRefresh } from "./redux/auth/authAction";
import { Toaster } from "react-hot-toast";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleRefresh());
  }, [dispatch]);

  return (
    <>
      <AppRoutes />

      <Toaster />
    </>
  );
}

export default App;
