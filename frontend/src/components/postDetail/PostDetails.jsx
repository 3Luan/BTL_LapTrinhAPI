import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import "./postdetails.css";
import { useDispatch, useSelector } from "react-redux";
import { handleGetPostById } from "../../redux/postDetails/postDetailsAction";

const PostDetails = ({ show, handleClose, post }) => {
  // const postDetails = useSelector(state => state.postDetails)

  // const dispatch = useDispatch();

  // useEffect(()=>{
  //   dispatch(handleGetPostById())
  // },[])

  return (
    <Modal
      size="lg"
      className="post_details"
      show={show}
      onHide={handleClose}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          {post.user.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{post.content}</Modal.Body>
      <Modal.Footer>{post.content}</Modal.Footer>
    </Modal>
  );
};

export default PostDetails;
