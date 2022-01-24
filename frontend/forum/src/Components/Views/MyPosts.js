import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCallCentersPosts,
  getClientsPosts,
} from "../../redux/actions/PostAction";
import AddPost from "../AddPost/AddPost";
import Contact from "../contact";
import NavBar from "../Navbar/NavBar";
import MyPost from "../Posts/MyPost";
import "./PostList.css";

export default function MyPosts({ clientPosts, callCenterPosts }) {
  const dispatch = useDispatch();
  useEffect(() => {
    callcenter ? dispatch(getCallCentersPosts()) : dispatch(getClientsPosts());
  }, []);
  const callcenter = useSelector(
    (state) => state.callCenterAuthReducer.callCenterIsAuth
  );
  const { clientLoading } = useSelector((state) => state.clientPostReducer);
  const { callLoading } = useSelector((state) => state.callCenterPostReducer);
  return (
    <>
      {callLoading && clientLoading ? (
        <h2>loading</h2>
      ) : (
        <>
        <NavBar />
          <div className="container">
            {callcenter ? (
              <div className="forumContainer">
                <div id="addPost" className="row col-sm-2">
                  <AddPost />
                </div>
                <br /><br /><br /><br />

                {callCenterPosts.map((callPost) => {
                  if (
                    localStorage.getItem("email") === callPost.CallCenter.email
                  )
                    return <MyPost callPost={callPost} key={callPost._id} />
                })}
              </div>
            ) : (
              <div className="forumContainer">
                <div id="addPost" className="row col-sm-2">
                  <AddPost />
                </div>
                <br /><br /><br /><br />
                {clientPosts.map((clientPost) => {
                  if (localStorage.getItem("email") === clientPost.Client.email)
                    return <MyPost clientPost={clientPost} key={clientPost._id} />
                })}
              </div>
            )}

          </div>
          <Contact />
        </>
      )}
    </>
  );
}
