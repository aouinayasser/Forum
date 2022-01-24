import "./App.css";
import Login from "./Components/LoginRegister/Login";
import Register from "./Components/LoginRegister/Register";
import NavBar from "./Components/Navbar/NavBar";
import PostList from "./Components/Views/PostList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./Components/Route/PrivateRoute";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "./Components/Views/Home";
import {
  currentCallCenter,
  currentClient,
  currentJobSeeker,
} from "./redux/actions/AuthAction";
import ViewPost from "./Components/Views/ViewPost";
import CallPostList from "./Components/Views/CallPostList";
import MyPosts from "./Components/Views/MyPosts";
import ClientCallPostList from "./Components/Views/ClientCallPostList";
import Alert from "./Components/Alerts/Alert";
import Contact from "./Components/contact";

function App() {
  const callCenterPosts = useSelector(
    (state) => state.callCenterPostReducer.callCenterPosts
  );
  const clientPosts = useSelector(
    (state) => state.clientPostReducer.clientPosts
  );
  const jobSeeker = useSelector((state) => state.jobSeekerAuthReducer.role);
  const callCenter = useSelector((state) => state.callCenterAuthReducer.role);
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      jobSeeker
        ? dispatch(currentJobSeeker())
        : callCenter
        ? dispatch(currentCallCenter())
        : dispatch(currentClient());
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/posts"
            element={
              <PrivateRoute>
                <NavBar />
                <Alert />
                <PostList clientPosts={clientPosts} />
                <Contact />
              </PrivateRoute>
            }
          />
          <Route
            path="/callposts"
            element={
              <PrivateRoute>
                <NavBar />
                <Alert />
                <CallPostList callCenterPosts={callCenterPosts} />
                <Contact />
              </PrivateRoute>
            }
          />
          <Route
            path="/ClientCallPostList"
            element={
              <PrivateRoute>
                <NavBar />
                <Alert />
                <ClientCallPostList callCenterPosts={callCenterPosts} />
                <Contact />
              </PrivateRoute>
            }
          />
          <Route
            path="/myposts"
            element={
              <MyPosts
                clientPosts={clientPosts}
                callCenterPosts={callCenterPosts}
              />
            }
          />
          <Route path="/viewpost" element={<ViewPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
