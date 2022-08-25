import react from 'react'
import {useParams} from 'react-router-dom'
import './Click.css'
import StarRatingComponent from 'react-star-rating-component';
import { useSelector } from 'react-redux';

function Click ()
{
    const {hotelList:hotels}=useSelector(state=>state.hotelReducer)
    const {id} = useParams()
    const hotel = hotels.find (ht=>ht.id === id)
    return (
        <div className='click'>

            <img src={hotel.image} style={{boxShadow:" 10px 5px 5px black",height:"350PX"}}/>
            <h1>
                {hotel.name}<br/>
            </h1>
            <StarRatingComponent
                name='star' /* name of the radio input, it is required */
                value={hotel.rate} /* number of selected icon (`0` - none, `1` - first) */
            />
            <h3>{hotel.price}</h3>
            <p>{hotel.locate}</p>
        </div>

    )

}
export default Click