import {useEffect, useRef,useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { AddFunc } from './Redux/actions/actions';
function AddHotel(props){
  const [show, setShow] = useState(false);
  const dispatch=useDispatch()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const namehotel=useRef();
  const hotelimage=useRef();
  const hotelrate=useRef();
  const hotelprice=useRef();
  const hotellocate=useRef();
  const [newhotel,setNewhotel]=useState(null)
  /* useEffect(()=>{
   dispatch( AddFunc(newhotel))
  },[newhotel]) */
  const add=(e)=>{
    e.preventDefault()
    // setNewhotel({name:namehotel.current.value,image:hotelimage.current.value,rate:hotelrate.current.value,price:hotelprice.current.value,locate:hotellocate.current.value});
    dispatch(AddFunc({name:namehotel.current.value,image:hotelimage.current.value,rate:hotelrate.current.value,price:hotelprice.current.value,locate:hotellocate.current.value}))
    handleClose() 
  }
    return (
    
    <div>
      <Button variant="primary" onClick={handleShow}>
        ADD HOTEL
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <input type={"text"} ref={namehotel} placeholder="name plz"></input>
        <input type={"text"} ref={hotelimage}placeholder="image plz"></input>
        <input type={Number} ref={hotelrate} placeholder="rate plz"></input>
        <input type={"text"} ref={hotelprice} placeholder="price plz"></input>
        <input type={"text"} ref={hotellocate} placeholder="locate plz"></input>
        <button type="button" className="btn btn-primary" onClick={add}> Save changes</button>
        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={handleClose}>Close</button>
        </Modal.Body>

      </Modal>
        
  </div>
    )
} 
export default AddHotel
