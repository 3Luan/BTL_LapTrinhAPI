import { useEffect } from "react";
import AppRoutes from "./routes/appRoutes";
import { useDispatch } from "react-redux";
import { handleRefresh } from "./redux/auth/authAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleRefresh());
  }, [dispatch]);

  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
