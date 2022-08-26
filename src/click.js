import react, { useState } from 'react'
import {useParams} from 'react-router-dom'
import './Click.css'
import StarRatingComponent from 'react-star-rating-component';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Click ()
{
    const {hotelList:hotels}=useSelector(state=>state.hotelReducer)
    const {id} = useParams()
    const hotel = hotels.find (ht=>ht.id === id)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
            <div>
      <Button variant="primary" onClick={handleShow}>
        Reserve now
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <input type={"text"}  placeholder="name plz"></input>
        <input type={"text"} placeholder="name@gmail.com"></input>
        <input type={"text"} placeholder="nombre de chambre"></input>
        <button type="button" className="btn btn-primary" > Save changes</button>
        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={handleClose}>Close</button>
        </Modal.Body>

      </Modal>
        
  </div>
            
        </div>

    )

}
export default Click