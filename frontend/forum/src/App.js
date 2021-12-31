import './App.css';
import Footer from './Components/Footer/Footer';
// import Login from './Components/LoginRegister/Login';
// import Register from './Components/LoginRegister/Register';
import NavBar from './Components/Navbar/NavBar';
// import PostList from './Components/Views/PostList';
import ViewPost from './Components/Views/ViewPost';




function App() {
  return (
    <div className="App">
      <NavBar />
      <ViewPost />
      {/* <PostList /> */}
      <Footer />
      {/* <Login />
      <Register /> */}
    </div>
  );
}

export default App;
