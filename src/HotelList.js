import React, { useState } from "react";
import AddHotel from './AddHotel.js'
import Navbar from "./navbar.js";
import Proprieties from "./propieties";
import {BrowserRouter,Route,Routes,NavLink} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import './HotelListe.css'
function HotelList()
{
  const {hotelList:hotels,filter:filters}=useSelector(state=>state.hotelReducer)
  console.log(hotels);
  console.log(filters);
 
  
  const [hotel,setHotel]=useState(hotels)
  
    return(  <div>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <>
             <Navbar></Navbar>
            
         
          <div className='hotel'>
        {hotels.filter((el)=>el.locate.toLowerCase().includes(filters.toLowerCase()))
        .map((e,index ) => (
          <NavLink to={"/"}>
            
            <Proprieties  e = {e}/* name={e.name} image={e.image} rate={e.rate} price={e.price} locate={e.locate} */></Proprieties>
            
            
          </NavLink>
        ))}
          </div>
           </>
        }></Route>
        
        
      </Routes>
      </BrowserRouter>
              <AddHotel hotel={hotel} setHotel={setHotel}> </AddHotel>

      </div>
    ); 
    
      
}
export default HotelList