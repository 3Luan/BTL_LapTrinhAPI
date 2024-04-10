import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createPostAPI } from "../../services/postsService";
import toast from "react-hot-toast";

const CreatePosts = ({ show, handleClose, addPost }) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [files, setFiles] = useState([]);
  const [loadCreatePost, setLoadCreatePost] = useState(false);

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleImagesChange = (e) => {
    setImages(e.target.files);
  };

  const handleFilesChange = (e) => {
    setFiles(e.target.files);
  };

  const handleOnclickCreatePosts = async () => {
    if (!content) {
      return toast.error("Hãy nhập nội dung");
    } else {
      setLoadCreatePost(true);

      const formData = new FormData();
      formData.append("content", content);
      for (let i = 0; i < images.length; i++) {
        formData.append("images", images[i]);
      }
      for (let i = 0; i < files.length; i++) {
        formData.append("files", files[i]);
      }
      handleClose(true);
      await toast.promise(createPostAPI(formData), {
        loading: "Bài viết đang được tạo...",
        success: (data) => {
          if (data.code === 0) {
            addPost(data);
            setContent("");
            setImages([]);
            setFiles([]);
            return data.message;
          } else {
            throw new Error(data.message);
          }
        },
        error: (error) => {
          return error.message;
        },
      });

      setLoadCreatePost(false);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tạo bài viết</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea
            type="textarea"
            placeholder="Nhập nội dung..."
            value={content}
            onChange={handleContentChange}
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleImagesChange}
            multiple
            id="customFileInput"
          />
          <span>Chọn ảnh</span>

          <input
            type="file"
            accept=".pdf, .doc, .docx"
            onChange={handleFilesChange}
            multiple
          />
          <span>Chọn files</span>

          {/* Hiển thị danh sách các hình ảnh đã chọn */}
        </Modal.Body>
        <Modal.Footer>
          {loadCreatePost ? (
            <>
              <Button variant="primary">
                <i className="fas fa-circle-notch fa-spin"></i>
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="primary"
                onClick={() => {
                  handleOnclickCreatePosts();
                }}
              >
                Đăng
              </Button>
            </>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreatePosts;
