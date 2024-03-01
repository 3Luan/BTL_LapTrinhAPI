import React from "react";
import { Modal } from "react-bootstrap";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { handleLoginWithGoogle } from "../../redux/auth/authAction";

const Login = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnclickLogin = () => {
    window.open("http://localhost:3001/api/auth/google", "_self");
    handleClose();
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      onClick={() => handleOnclickLogin()}
    >
      <Modal.Header closeButton>
        <Modal.Title className="text-center">
          <div className="login_google">
            <img src="/assets/images/logo_google.png" alt="" />
            <span>Tiếp tục với Google</span>
          </div>
        </Modal.Title>
      </Modal.Header>
    </Modal>
  );
};

export default Login;
