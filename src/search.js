import React,{useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { locationFilter, rateFilter } from "./Redux/actions/actions"
import StarRatingComponent from 'react-star-rating-component';
import './search.css'


function Search()
{
    const [location, setLocation] = useState('')
    const filters=useSelector(state=>state.hotelReducer.filter)
    const [filter,setFilter]=useState(filters)
    const dispatch =useDispatch()
    const searchHandler = (e)=>{
        e.preventDefault()
        dispatch(locationFilter(e.target.value))
    }
    const rateHandler= (e)=>{
        console.log(e)
        // e.preventDefault()
        dispatch(rateFilter(e))
    }

    return (
        <div className="sear">
        <h3 style={{justifyContent:"center"}}>Hotel à Tunisie<br/></h3>
        <div className="inp">
        <i className="fa-solid fa-location-dot"></i>
        {/* <input type={"search"} placeholder="locate" value={location} /> */}
        <select onChange={searchHandler}>
        <option></option>
         <option> El Jem</option>
         <option>Bizerte</option>
         <option>Gafsa</option>
         <option>Kairouan</option>
        <option>Sousse</option>
        <option>Hamamet</option>
        <option>Nabeul</option>
        <option>Monastir</option>
        <option>Sfax</option>
        <option>Tabarka</option>
        <option>Tozeur</option>
        <option>Tunis </option>
        <option>Zarzis</option>
        <option>Sbeitla</option>
        <option>klébia</option>
        <option>Mahdia</option>
        <option>Djerba</option>
        <option>Ain Drahem</option>
        <option>Douz</option>
        <option>Gammarth</option>
        </select>
        </div>
        <div id="njoum">
        <StarRatingComponent 
    name='rating' /* name of the radio input, it is required */ onStarClick={rateHandler}
        />
        </div>
         </div>
    )
}
export default Search ;