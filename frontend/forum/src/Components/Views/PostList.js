import AddPost from '../AddPost/AddPost'
import Post from '../Posts/Post'
import './PostList.css'







export default function PostList() {
    return(
        <div className='container'>
            <div className="forumContainer">
                <div id='addPost' className='row col-sm-2' >
                <AddPost />
                </div>
                <Post />
            </div>
        </div>
    )
};
