import React from 'react'
import './navbar.css'
import Search from './search.js'
function Navbar()
{
    return(
        <div>
            <h1 style={{color:"brown"}}>BookingBy<span style={{color:"darkgoldenrod"}}>Mootez</span></h1>
            <span>
            <i className="fa-solid fa-phone"></i>  
            <h6>if you want to book a hotel call us on 73456753</h6>
            </span>
            <Search></Search>
        </div>
    )
}
export default Navbar