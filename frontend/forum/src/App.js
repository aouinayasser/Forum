import './App.css';
import Footer from './Components/Footer/Footer';
import Login from './Components/LoginRegister/Login';
import Register from './Components/LoginRegister/Register';
import NavBar from './Components/Navbar/NavBar';
import PostList from './Components/Views/PostList';
import ViewPost from './Components/Views/ViewPost';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import PrivateRoute from './Components/Route/PrivateRoute';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <Routes>
        <Route path='/posts' element={
          <PrivateRoute>
            
            <PostList />
            
          </PrivateRoute>
        } />
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
     
    </div>
    </BrowserRouter>  
  );
}

export default App;