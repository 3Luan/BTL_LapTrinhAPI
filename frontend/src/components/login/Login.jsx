import React from "react";
import { Modal } from "react-bootstrap";
import "./login.css";

const Login = ({ show, handleClose }) => {
  const handleOnclickLogin = () => {
    window.open("http://localhost:3001/api/auth/google", "_self");
    handleClose();
  };

  return (
    <Modal
      className="login"
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
