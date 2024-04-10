import React, { useEffect, useState } from "react";
import "./community.css";
import { useDispatch, useSelector } from "react-redux";
import { handleGetPosts } from "../../redux/posts/postsAction";
import LoadingSkeleton from "../../components/Loading/LoadingSkeleton";
import CreatePosts from "../../components/customs/CreatePosts";
import moment from "moment";
import "moment/locale/vi";
import { toggleLikePostAPI } from "../../services/postsService";
import toast from "react-hot-toast";
import PostCard from "../../components/Card/PostCard";

const Community = () => {
  moment.locale("vi");

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const auth = useSelector((state) => state.auth);
  const [showCreatePostsModal, setShowCreatePostsModal] = useState(false);
  const [arrPosts, setArrPosts] = useState([]);

  const handleClose = () => {
    setShowCreatePostsModal(false);
  };

  const handleShowCreatePostsModal = () => {
    setShowCreatePostsModal(true);
  };

  useEffect(() => {
    dispatch(handleGetPosts());
  }, []);

  let addPost = (data) => {
    setArrPosts([data.post, ...arrPosts]);
  };

  useEffect(() => {
    // Khởi tạo trạng thái isLike cho mỗi bài viết từ dữ liệu posts
    if (posts.posts && !posts.isLoading) {
      setArrPosts(posts.posts);

      // console.log("posts.posts", posts);
      // const initialLikes = {};
      // posts.posts.forEach((post) => {
      //   initialLikes[post._id] = post.likes.some(
      //     (like) => like.user === auth.id
      //   );
      // });
      // setIsLike(initialLikes);
    }
  }, [posts.posts]);

  return (
    <main>
      <section className="video_items flex">
        <div className="trending">
          <button className="chat title">
            Cộng đồng
            <div className="">
              <button onClick={() => handleShowCreatePostsModal()}>
                Đăng bài
              </button>
            </div>
          </button>

          {posts.isLoading || arrPosts.length === 0 ? (
            <>
              {Array(2)
                .fill(0)
                .map((item, index) => (
                  <Community.Loading key={index}></Community.Loading>
                ))}
            </>
          ) : (
            <>
              {arrPosts.length > 0 ? (
                arrPosts.map((item) => {
                  return <PostCard item={item} />;
                })
              ) : (
                <>Không có bài viết nào</>
              )}
            </>
          )}
        </div>

        <CreatePosts
          addPost={addPost}
          show={showCreatePostsModal}
          handleClose={handleClose}
        />
      </section>
    </main>
  );
};

const Loading = () => {
  return (
    <>
      <div className="community-posts">
        <div className="header-posts">
          <a href="#">
            <div className="avatar">
              <LoadingSkeleton
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                }}
              ></LoadingSkeleton>
            </div>
          </a>
          <div className="info">
            <a href="#">
              <LoadingSkeleton
                style={{
                  width: "20%",
                  height: "20px",
                  borderRadius: "5px",
                }}
              ></LoadingSkeleton>
            </a>
            <small className="text-muted">
              <LoadingSkeleton
                style={{
                  width: "20%",
                  height: "10px",
                  marginTop: "5px",
                  borderRadius: "3px",
                }}
              ></LoadingSkeleton>
            </small>
          </div>
        </div>
        <div className="body-posts">
          <div className="content">
            <p>
              <LoadingSkeleton
                style={{
                  width: "100%",
                  height: "100px",
                  borderRadius: "10px",
                }}
              ></LoadingSkeleton>
            </p>
          </div>

          <div className="footer-posts">
            <div className="interaction">
              <hr />
              <button className="btn btn-white btn-xs">
                <i className="fa fa-thumbs-up"></i> Thích
              </button>
              <button className="btn btn-white btn-xs">
                <i className="fa fa-comments"></i> Bình luận
              </button>
              <button className="btn btn-white btn-xs">
                <i className="fa fa-share"></i> Chia sẻ
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
Community.Loading = Loading;

export default Community;
