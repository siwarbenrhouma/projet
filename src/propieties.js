import React from 'react'
import StarRatingComponent from 'react-star-rating-component';

import './HotelListe.css'
function Proprieties({e}) {
  return (
    <div className="card"  >
      <img  style={{height:"350PX"}} src={e.image}></img>
      <div className='desc'>
      <span>{e.name}</span>
    
      <StarRatingComponent
       name='star' /* name of the radio input, it is required */
       value={e.rate} /* number of selected icon (`0` - none, `1` - first) */
      />
      <p>{e.price}</p>
      <p>{e.locate}</p>
      </div>  
    </div>
  )
}

export default Proprieties