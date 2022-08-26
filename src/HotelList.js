import React, { useState } from "react";
import AddHotel from './AddHotel.js'
import Navbar from "./navbar.js";
import Proprieties from "./propieties";
import {BrowserRouter,Route,Routes,NavLink} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import Click from "./click.js";
import './HotelListe.css'
function HotelList()
{
  const {hotelList:hotels,filter:filters,rateFilter:rateFilter }=useSelector(state=>state.hotelReducer)
  console.log("Hotel list: ",hotels);
  console.log("Filter location:",filters);
  console.log("rateFilter",rateFilter);
  
  const [hotel,setHotel]=useState(hotels)
  
    return(  <div>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <>
             <Navbar></Navbar>
              <div className='hotel'>
              {hotels.filter((el)=>el.locate.toLowerCase().includes(filters.toLowerCase()) && el.rate>=rateFilter)
              .map((e,index ) => (
              <NavLink to={"/"+index}>
                <Proprieties  e = {e}/* name={e.name} image={e.image} rate={e.rate} price={e.price} locate={e.locate} */></Proprieties>
              </NavLink>
             ))}
              </div>
              <AddHotel> </AddHotel>
           </>
          }></Route>
         <Route path='/:id' element={ <Click></Click> }></Route>
        
        
      </Routes>

      </BrowserRouter>
              

      </div>
    ); 
}
export default HotelList