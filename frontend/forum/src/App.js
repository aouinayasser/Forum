import './App.css';
import Footer from './Components/Footer/Footer';
import Login from './Components/LoginRegister/Login';
import Register from './Components/LoginRegister/Register';
import NavBar from './Components/Navbar/NavBar';
import PostList from './Components/Views/PostList';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import PrivateRoute from './Components/Route/PrivateRoute';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Home from './Components/Views/Home';
import { currentCallCenter, currentClient, currentJobSeeker } from './redux/actions/AuthAction';
import ViewPost from './Components/Views/ViewPost';
import CallPostList from './Components/Views/CallPostList';
import MyPosts from './Components/Views/MyPosts';

function App() {
  const jobSeeker=useSelector(state=>state.jobSeekerAuthReducer.role)
  const callCenter=useSelector(state=>state.callCenterAuthReducer.role)
  const dispatch=useDispatch()
  useEffect(()=>{
    if(localStorage.getItem('token')){
      jobSeeker ? dispatch(currentJobSeeker()) : 
      callCenter ? dispatch(currentCallCenter()) : dispatch(currentClient())
    }
  },[])

  return (
    <BrowserRouter>
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts' element={
          <PrivateRoute>
            <NavBar />
            <PostList />
            <Footer />
          </PrivateRoute>
        } />
        <Route path='/callposts' element={
          <PrivateRoute>
            <NavBar />
            <CallPostList />
            <Footer />
          </PrivateRoute>
        } />
        <Route path='/myposts' element={
          <PrivateRoute>
            <NavBar />
            <MyPosts />
            <Footer />
          </PrivateRoute>
        } />
        <Route path='/viewpost' element={<ViewPost />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
     
    </div>
    </BrowserRouter>  
  );
}

export default App;