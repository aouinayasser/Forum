import axios from 'axios'


export const jobSeekerRegister=(formData)=>async(dispatch)=>{
    try {
        const res=await axios.post('/api/auth/jobseeker/signup',formData)
        console.log(res.data)
    } catch (error) {
        console.log(error.response.data)
    }
}