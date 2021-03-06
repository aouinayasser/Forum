import { GET_JOBSEEKER, JOBSEEKER_FAIL, JOBSEEKER_LOGIN, JOBSEEKER_LOGOUT, JOBSEEKER_REGISTER } from "../types"




const initState={
    jobSeeker:null,
    loading:true,
    jobSeekerIsAuth:false,
    role:'JobSeeker'
}

function jobSeekerAuthReducer(state=initState,{type,payload}){
    switch (type) {
        case JOBSEEKER_REGISTER:
            localStorage.setItem('token',payload.token)
            localStorage.setItem('email',payload.jobSeeker.email)
            return{
                ...state,jobSeeker:payload.jobSeeker,jobSeekerIsAuth:true,loading:false
            }
        case JOBSEEKER_LOGIN:
            localStorage.setItem('token',payload.token)
            localStorage.setItem('email',payload.jobSeeker.email)
            return{
                ...state,jobSeeker:payload.jobSeeker,jobSeekerIsAuth:true,loading:false
            }
        case JOBSEEKER_FAIL:
        case JOBSEEKER_LOGOUT:
            localStorage.removeItem('email')
            localStorage.removeItem('token')
            return{
                ...state,jobSeeker:null,jobSeekerIsAuth:false
            }
        case GET_JOBSEEKER:
           return {
            ...state,jobSeeker:payload,jobSeekerIsAuth:true,loading:false
           }
    
        default:
           return state
    }
}

export default jobSeekerAuthReducer