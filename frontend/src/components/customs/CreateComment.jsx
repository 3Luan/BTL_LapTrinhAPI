import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createPostAPI } from "../../services/postsService";
import toast from "react-hot-toast";

const CreateComment = ({ show, handleClose, addPost }) => {
  // const dispatch = useDispatch();
  // const [content, setContent] = useState("");
  // const [images, setImages] = useState([]);
  // const [files, setFiles] = useState([]);
  // const [loadCreatePost, setLoadCreatePost] = useState(false);

  // const handleContentChange = (e) => {
  //   setContent(e.target.value);
  // };

  // const handleImagesChange = (e) => {
  //   setImages(e.target.files);
  // };

  // const handleFilesChange = (e) => {
  //   setFiles(e.target.files);
  // };

  // const handleOnclickCreatePosts = async () => {
  //   if (!content) {
  //     return toast.error("Hãy nhập nội dung");
  //   } else {
  //     setLoadCreatePost(true);

  //     const formData = new FormData();
  //     formData.append("content", content);
  //     for (let i = 0; i < images.length; i++) {
  //       formData.append("images", images[i]);
  //     }
  //     for (let i = 0; i < files.length; i++) {
  //       formData.append("files", files[i]);
  //     }
  //     handleClose(true);
  //     await toast.promise(createPostAPI(formData), {
  //       loading: "Bài viết đang được tạo...",
  //       success: (data) => {
  //         if (data.code === 0) {
  //           addPost(data);
  //           setContent("");
  //           setImages([]);
  //           setFiles([]);
  //           return data.message;
  //         } else {
  //           throw new Error(data.message);
  //         }
  //       },
  //       error: (error) => {
  //         return error.message;
  //       },
  //     });

  //     setLoadCreatePost(false);
  //   }
  // };

  return (
    <div className="bg-primary px-4 rounded-lg">
      <div className="w-full flex items-center gap-2 py-4 border-b border-[#66666645]">
        <img
          src={
            auth.pic ||
            "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
          }
          alt="User Image"
          className="w-12 h-12 rounded-full object-cover"
        />

        <TextInput
          styles="w-full"
          placeholder="Nội dung bình luận...."
          // value={content}
          // onChange={(e) => setContent(e.target.value)}
        />

        <CustomButton
        // title={
        //   loadCreateComment ? (
        //     <i className="fas fa-circle-notch fa-spin"></i>
        //   ) : (
        //     "Comment"
        //   )
        // }
        // containerStyles={`bg-[#0444a4] text-white py-3 px-10 rounded-full font-semibold text-sm ${
        //   loadCreateComment && "pointer-events-none"
        // }`}
        // onClick={() => {
        //   if (!loadCreateComment) {
        //     onclickCreateComment();
        //   }
        // }}
        />
      </div>
    </div>
  );
};

export default CreateComment;
