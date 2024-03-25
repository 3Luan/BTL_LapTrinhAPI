import { useEffect } from "react";
import AppRoutes from "./routes/appRoutes";
import { useDispatch, useSelector } from "react-redux";
import { handleRefresh } from "./redux/auth/authAction";
import { Toaster } from "react-hot-toast";
function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(handleRefresh());
  }, [dispatch, auth.auth]);

  return (
    <>
      <AppRoutes />

      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
