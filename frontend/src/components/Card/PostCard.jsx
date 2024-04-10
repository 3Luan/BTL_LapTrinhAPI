import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/vi";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { toggleLikePostAPI } from "../../services/postsService";
import { useSelector } from "react-redux";
import PostDetails from "../postDetail/PostDetails";

const PostCard = ({ item }) => {
  moment.locale("vi");

  const auth = useSelector((state) => state.auth);
  const [totalLike, setTotalLike] = useState(0);
  const [isLike, setIsLike] = useState();
  const [isLoadingLike, setIsLoadingLike] = useState(false);

  const [showPostDetailsModal, setShowPostDetailsModal] = useState(false);

  const handleClose = () => {
    setShowPostDetailsModal(false);
  };

  const handleShowPostDetailsModal = () => {
    setShowPostDetailsModal(true);
  };

  useEffect(() => {
    setTotalLike(item.likes.length);
    setIsLike(item.likes.some((like) => like.user === auth.id));
  }, []);

  const onclickToggleLikePost = async (postId) => {
    setIsLoadingLike(true);

    await toast.promise(toggleLikePostAPI(postId), {
      loading: "Loading...",
      success: (data) => {
        if (data.code === 0) {
          // Toggle like status
          setIsLike(!isLike);
          // Update totalLike
          setTotalLike((prevTotalLike) =>
            isLike ? prevTotalLike - 1 : prevTotalLike + 1
          );
          return data.message;
        } else {
          throw new Error(data.message);
        }
      },
      error: (error) => {
        return error.message;
      },
    });

    setIsLoadingLike(false);
  };

  return (
    <div className="community-posts" key={item._id}>
      <div className="header-posts">
        <a href={`/profile/${item.user._id}`}>
          <div className="avatar">
            <img alt="" src={item.user.avatar} />
          </div>
        </a>
        <div className="info">
          <a href={`/profile/${item.user._id}`}>{item.user.name}</a>

          <small className="text-muted">
            {moment(item.createdAt).fromNow()}
          </small>
        </div>
      </div>
      <div className="body-posts">
        <div className="content">
          <p>{item.content}</p>
        </div>
        <div className="images_posts">
          {item.images &&
            item.images.map((image, index) => (
              <img
                key={index}
                alt={`Post Image ${index}`}
                src={`data:${image.contentType};base64,${image.data}`}
              />
            ))}
        </div>
        <div className="files_posts">
          {item.files &&
            item.files.map((file, index) => (
              <div key={index} className="file-item">
                <a
                  href={`data:${file.contentType};base64,${file.data}`}
                  download={file.originalName}
                >
                  {file.originalName} (Size: {file.size} bytes)
                </a>
              </div>
            ))}
        </div>

        <div className="footer-posts">
          <div className="interaction">
            <hr />
            <span>{totalLike > 0 ? <>{totalLike} Likes</> : null}</span>
            <br />
            <button
              className="btn btn-white btn-xs"
              onClick={() => {
                if (!isLoadingLike) {
                  onclickToggleLikePost(item._id);
                }
              }}
            >
              {isLike ? (
                <>
                  <i className="fa-solid fa-thumbs-up"></i> Thích
                </>
              ) : (
                <>
                  <i className="fa-regular fa-thumbs-up"></i> Thích
                </>
              )}
            </button>

            {/* <button
              className="btn btn-white btn-xs"
              onClick={() => handleShowPostDetailsModal()}
            >
              <i className="fa fa-comments"></i> Bình luận
            </button> */}

            <PostDetails
              show={showPostDetailsModal}
              handleClose={handleClose}
              post={item}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
