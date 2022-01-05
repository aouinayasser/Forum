import {Navigate} from 'react-router-dom'



export default function PrivateRoute({children,isAuth}) {
    return(
        <>
            {
                isAuth ? children : <Navigate to='/login' />
            }
        </>
    )
};
