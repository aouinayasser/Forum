import axios from 'axios'
import { CLIENT_FAIL, CLIENT_REGISTER,CALLCENTER_FAIL,CALLCENTER_REGISTER,JOBSEEKER_FAIL,JOBSEEKER_REGISTER } from '../types'


export const jobSeekerRegister=(formData,navigate)=>async(dispatch)=>{
    try {
        const res=await axios.post('/api/auth/jobseeker/signup',formData)
        dispatch({type:JOBSEEKER_REGISTER,payload:res.data})
        navigate('/login')
    } catch (error) {
        dispatch({type:JOBSEEKER_FAIL})
    }
}

export const callCenterRegister=(formData,navigate)=>async(dispatch)=>{
    try {
        const res=await axios.post('/api/auth/callcenter/signup',formData)
        dispatch({type:CALLCENTER_REGISTER,payload:res.data})
        navigate('/login')
    } catch (error) {
        dispatch({type:CALLCENTER_FAIL})
    }
}

export const clientRegister=(formData,navigate)=>async(dispatch)=>{
    try {
        const res=await axios.post('/api/auth/client/signup',formData)
        dispatch({type:CLIENT_REGISTER,payload:res.data})
        navigate('/login')
    } catch (error) {
        dispatch({type:CLIENT_FAIL})
    }
}