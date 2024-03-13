import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, useNavigate } from "react-router-dom";

const PrivateRoutes = (props) => {
  const auth = useSelector((state) => state.auth);

  const [isAuthorized, setIsAuthorized] = useState(false);
  const navigate = useNavigate();
  console.log(auth.auth, auth.isLoading);

  if (!auth.auth) {
    return (
      <div className="alert alert-danger text-center" role="alert">
        <h4 className="alert-heading">Error!</h4>
        <p>Đăng nhập để thao tác</p>
      </div>
    );
  }

  return <>{props.children}</>;
};

export default PrivateRoutes;
