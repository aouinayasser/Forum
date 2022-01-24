import { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";
import { useDispatch } from "react-redux";
import { getClientsPosts } from "../../redux/actions/PostAction";
import Post from "../Posts/Post";
import "./PostList.css";

export default function PostList({ clientPosts }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClientsPosts());
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = clientPosts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="container">
      <div className="forumContainer">
        {currentPosts.map((clientPost) => (
          <Post clientPost={clientPost} key={clientPost._id} />
        ))}
        
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={clientPosts.length}
        paginate={paginate}
      />
    </div>
  );
}
