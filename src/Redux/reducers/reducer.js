import { actionType, ADD_HOTEL, FILTER_LOCATION, FILTER_RATE } from "../actions/types"

const initialState = {
    hotelList:[
        
        {id:"0" ,name:"Mövenpick Resort & Marine Spa Sousse",image:"https://image.resabooking.com/images/hotel/Kelibia_Beach_.jpg",rate:4,locate:"klébia",price:"95 DT"},
        {id: "1",name:"Magic hotel Nerolia Hotel & Spa",image:"https://image.resabooking.com/images/hotel/Nerolia_By_Magic_Hotels_11.jpg",rate:4,locate:"Monastir",price:"144 DT"},
        
        {id:"2" ,name:"Pearl Mariotte Resort & spa",image:"https://image.resabooking.com/images/hotel/Sousse_Pearl_Marriott_Resort_&_Spa_7.jpg",rate:5,locate:"sousse",price:"244 DT"},
        {id: "3",name:"Marhabe palace",image:"https://image.resabooking.com/images/image_panoramique/Marhaba_Palace_2.jpg",rate:5,locate:"sousse",price:"160DT"},
        {id: "4",name:"jerba Sun Club",image:"https://image.resabooking.com/images/image_panoramique/Jerba_Sun_Club_2.jpg",rate:3,locate:"Djerba",price:"72 DT"},
        
        {id: "5",name:"Thapsus Beach Resort",image:"https://image.resabooking.com/images/image_panoramique/Thapsus_Beach_Resort_2.jpg",rate:4,locate:"Mahdia",price:"59"},
        {id:"6" ,name:"Les Pyramides hotels club & spa",image:"https://image.resabooking.com/images/hotel/Pyramides_4.jpg",rate:3,locate:"nabeul",price:"84 DT"},
        {id:"7" ,name:"Khayem garden beach & spa",image:"https://image.resabooking.com/images/image_panoramique/Khayam_Garden_Beach_&_Spa_2.jpg",rate:4,locate:"nabeul",price:"142 DT"},
        {id:"8" ,name:"Dar Ismail",image:"https://image.resabooking.com/images/hotel/Dar_Ismail_.jpeg",rate:5,locate:"Tabarka",price:"102 DT"},
        {id:"9" ,name:"Club Palm Azur",image:"https://image.resabooking.com/images/image_panoramique/club_palm_azur_2.jpg",rate:2,locate:"Djerba",price:"150 DT"},
        {id:"10" ,name:"Pacha Hotel",image:"https://image.resabooking.com/images/image_panoramique/pacha_hotel_2.jpg",rate:3,locate:"Sfax",price:"54 DT"},
        {id:"11" ,name:"Phebus",image:"https://image.resabooking.com/images/hotel/Phebus_Gammarth_.png",rate:2,locate:"Gammarth",price:"50 DT"},

    ],
    filter:'',
    rateFilter:0
}
const hotelReducer = (state=initialState,{type,payload} ) => { 
    switch (type) {
        // case actionType:
        // return {...state};
        case ADD_HOTEL:
            /* return {...state,hotelList:[...state.hotelList,payload]}; */
            return{
                ...state,
                hotelList : [...state.hotelList , payload ]
            }
            case FILTER_LOCATION:
                return{
                    ...state,
                    filter: payload
                }       
            case FILTER_RATE:
                return{
                    ...state,
                    rateFilter:payload
                } 
        default:
            return state
    }
}
export default hotelReducer