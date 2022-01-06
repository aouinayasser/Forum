import { CALLCENTER_FAIL, CALLCENTER_REGISTER } from "../types"



const initState={
    callCenter:null,
    loading:true,
    callCenterIsAuth:false
}

function callCenterAuthReducer(state=initState,{type,payload}){
    switch (type) {
        case CALLCENTER_REGISTER:
            localStorage.setItem('token',payload.token)
            return{
                ...state,callCenter:payload.callCenter,callCenterIsAuth:true,loading:false
            }
        case CALLCENTER_FAIL:
            localStorage.removeItem('token')
            return{
                ...state,callCenter:null,callCenterIsAuth:false
            } 
           
    
        default:
           return state
    }
}

export default callCenterAuthReducer