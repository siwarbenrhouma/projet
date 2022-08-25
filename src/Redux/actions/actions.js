import { ADD_HOTEL } from "./types"
import {v4 as uuidv4} from 'uuid'


// export const actionfunct = (payloadInfo) => { 
//     return {
//         type:actionType,
//         payload:payloadInfo

//     }

//  }
// export const filterfunc = (payloadfilter) => { 
//     return {
//         type:filtertype,
//         payload:payloadfilter

//     }
    
//  }
 export const AddFunc = (newHotel) => { 
    return {
        type:ADD_HOTEL,
        payload: {...newHotel , id : uuidv4}

    }
    
 }