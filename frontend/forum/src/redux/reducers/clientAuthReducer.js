import { CLIENT_FAIL, CLIENT_REGISTER, GET_CLIENT } from "../types"



const initState={
    client:null,
    loading:true,
    clientIsAuth:false,
    role:'Client'
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
        case GET_CLIENT:
           return {
            ...state,client:payload,clientIsAuth:true,loading:false
           }
           
        default:
           return state
    }
}

export default clientAuthReducer