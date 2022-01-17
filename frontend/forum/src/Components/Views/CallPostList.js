import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Post from "../Posts/Post";
import "./PostList.css";
import { getCallCentersPosts } from "../../redux/actions/PostAction";

export default function CallPostList({callCenterPosts}) {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getCallCentersPosts())
  },[])
  return (
    <div className="container">
      <div className="forumContainer">
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
