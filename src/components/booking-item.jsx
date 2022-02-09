import { Link, useNavigate } from "react-router-dom"
import { useContext} from "react"

import api from "../config/api";
import BookingContext from "../utils/BookingContext";

const BookingsItem = ({id, date, serviceType, make, model, firstName, lastName}) => {

    const navigate = useNavigate();
    const { bookingContext, setBookingContext} = useContext(BookingContext)

    const handleOnClick = async (event) => {
        event.preventDefault()
        const myBooking = await api.getBooking(id)
        setBookingContext(myBooking)
        navigate("/booking")
    }


    return (
        <div style={{padding:"10px", border: "black solid 2px"}}>
            <h3>Job: {serviceType}</h3>
            <h4>Date: {date}</h4>
            <h5>Car: {make} {model}</h5>
            <h5>Client: {firstName} {lastName}</h5>
            <button onClick={handleOnClick}>SHOW</button>
        </div>
    )

}

export default BookingsItem