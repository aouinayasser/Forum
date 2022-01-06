import { CLIENT_FAIL, CLIENT_REGISTER } from "../types"



const initState={
    client:null,
    loading:true,
    clientIsAuth:false
}

function clientAuthReducer(state=initState,{type,payload}){
    switch (type) {
        case CLIENT_REGISTER:
            localStorage.setItem('token',payload.token)
            return{
                ...state,client:payload.client,clientIsAuth:true,loading:false
            }
        case CLIENT_FAIL:
            localStorage.removeItem('token')
            return{
                ...state,client:null,clientIsAuth:false
            } 
           
    
        default:
           return state
    }
}

export default clientAuthReducer