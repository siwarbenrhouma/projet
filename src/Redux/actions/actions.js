import { ADD_HOTEL, FILTER_LOCATION, FILTER_RATE } from "./types"
import {v4 as uuidv4} from 'uuid'


// export const actionfunct = (payloadInfo) => { 
//     return {
//         type:actionType,
//         payload:payloadInfo

//     }

//  }
export const locationFilter = (locationFilter) => { 
    return {
        type:FILTER_LOCATION,
        payload:locationFilter

    }
    
 }
 export const rateFilter = (rateFilter) => { 
    return {
        type:FILTER_RATE,
        payload:rateFilter

    }
    
 }
 export const AddFunc = (newHotel) => { 
    return {
        type:ADD_HOTEL,
        payload: {...newHotel , id : uuidv4}

    }
    
 }