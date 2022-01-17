import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Post from "../Posts/Post";
import "./PostList.css";
import { getCallCentersPosts } from "../../redux/actions/PostAction";
import AddPost from "../AddPost/AddPost";

export default function ClientCallPostList({callCenterPosts}) {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getCallCentersPosts())
  },[])
  return (
    <div className="container">
      <div className="forumContainer">
        <div id="addPost" className="row col-sm-2">
            <AddPost />
        </div>
        {
          callCenterPosts.map((callPost)=>(<Post callPost={callPost} key={callPost._id}/> ))
        }
        
      </div>
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link"  aria-label="Previous">
              <span aria-hidden="true">«</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" >
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" >
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" >
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link"  aria-label="Next">
              <span aria-hidden="true">»</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
