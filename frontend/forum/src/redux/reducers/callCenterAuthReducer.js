import { CALLCENTER_FAIL, CALLCENTER_LOGIN, CALLCENTER_LOGOUT, CALLCENTER_REGISTER, GET_CALLCENTER } from "../types"



const initState={
    callCenter:null,
    loading:true,
    callCenterIsAuth:false,
    role:'CallCenter'
}

function callCenterAuthReducer(state=initState,{type,payload}){
    switch (type) {
        case CALLCENTER_REGISTER:
            localStorage.setItem('token',payload.token)
            localStorage.setItem('email',payload.callCenter.email)
            return{
                ...state,callCenter:payload.callCenter,callCenterIsAuth:true,loading:true
            }
        case CALLCENTER_LOGIN:
            localStorage.setItem('token',payload.token)
            localStorage.setItem('email',payload.callCenter.email)
            return{
                ...state,callCenter:payload.callCenter,callCenterIsAuth:true,loading:false
            }
        case CALLCENTER_FAIL:
        case CALLCENTER_LOGOUT:
            localStorage.removeItem('token')
            localStorage.removeItem('email')
            return{
                ...state,callCenter:null,callCenterIsAuth:false
            } 
        case GET_CALLCENTER:
           return {
            ...state,callCenter:payload,callCenterIsAuth:true,loading:false
           }   
    
        default:
           return state
    }
}

export default callCenterAuthReducer