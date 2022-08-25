import React,{useState} from "react"
import './search.css'


function Search()
{
    const [location, setLocation] = useState('')
    
    return (<div className="sear">
        <h3 style={{justifyContent:"center"}}>Hotel à Tunisie<br/></h3>
        <div className="inp">
        <i className="fa-solid fa-location-dot"></i>
        {/* <input type={"search"} placeholder="locate" value={location} /> */}
        <select onChange={(e)=>setLocation(e.target.value)}>
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
        <div className="inp">
        <input type={"date"} placeholder="date d'arrivée"/>
        </div>
        <div className="inp">
        <input type={"date"} placeholder="date de départ"/>
        </div>
        <button>search</button>
         </div>
    )
}
export default Search ;