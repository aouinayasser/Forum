import { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import Post from "../Posts/Post";
import "./PostList.css";
import { getCallCentersPosts } from "../../redux/actions/PostAction";
import Pagination from "../Pagination/Pagination";
export default function CallPostList({callCenterPosts}) {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getCallCentersPosts())
  },[])
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = callCenterPosts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="container">
      <div className="forumContainer">
        {
          currentPosts.map((callPost)=>(<Post callPost={callPost} key={callPost._id}/> ))
        }
        
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={callCenterPosts.length}
        paginate={paginate}
      />
    </div>
  );
}
