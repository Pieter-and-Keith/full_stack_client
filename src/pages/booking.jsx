import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import BookingContext from "../utils/BookingContext"


const Booking = () => {
    const navigate = useNavigate()
    const { bookingContext } = useContext(BookingContext)

    const handleBackButton = () => {
        navigate("/admin")
    }

    return (
        <>
            <h1>Job: {bookingContext.service_type}</h1>
            <h3>Date: {bookingContext.date}</h3>
            <h5>Car: {bookingContext.make} {bookingContext.model}</h5>
            <h5>First name: {bookingContext.first_name}</h5>
            <h5>Last name: {bookingContext.last_name}</h5>
            <p>Comment: {bookingContext.comment}</p>
            {bookingContext.paid ? <h6> Invoice is Paid</h6> : <h6>Not paid yet</h6>}
            {bookingContext.finished ? <h6>Car is ready</h6> : <h6>Car not ready</h6>}
            {/* <button>Update</button> */}
            <button onClick={handleBackButton}>Back</button>
        </>
    )

}

export default Booking