import { JOBSEEKER_FAIL, JOBSEEKER_REGISTER } from "../types"




const initState={
    jobSeeker:null,
    loading:true,
    jobSeekerIsAuth:false
}

function jobSeekerAuthReducer(state=initState,{type,payload}){
    switch (type) {
        case JOBSEEKER_REGISTER:
            localStorage.setItem('token',payload.token)
            return{
                ...state,jobSeeker:payload.jobSeeker,jobSeekerIsAuth:true,loading:false
            }
        case JOBSEEKER_FAIL:
            localStorage.removeItem('token')
            return{
                ...state,jobSeeker:null,jobSeekerIsAuth:false
            } 
           
    
        default:
           return state
    }
}

export default jobSeekerAuthReducer