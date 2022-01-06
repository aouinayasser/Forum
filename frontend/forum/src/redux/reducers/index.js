import {combineReducers} from 'redux'
import jobSeekerAuthReducer from './jobSeekerAuthReducer'
import callCenterAuthReducer from './callCenterAuthReducer'
import clientAuthReducer from './clientAuthReducer'


const rootReducer=combineReducers({
    jobSeekerAuthReducer,callCenterAuthReducer,clientAuthReducer
})


export default rootReducer