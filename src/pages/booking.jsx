import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import api from "../config/api"

import BookingContext from "../utils/BookingContext"


const Booking = () => {
    const navigate = useNavigate()
    const { bookingContext } = useContext(BookingContext)

    const handleBackButton = () => {
        navigate("/admin")
    }

    const handlePaidButton = async () => {
        const paidData = {
            paid: true
        }
        const paidStatus = await api.updatePaid(paidData, bookingContext.booking_id)
        console.log(paidStatus)
    }
    const handleFinishedButton = async () => {
        const finishedData = {
            finished: true
        }
        const finishedStatus = await api.updateFinished(finishedData, bookingContext.booking_id)
        console.log(finishedStatus)
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
            <button onClick={handlePaidButton}>Paid</button>
            <button onClick={handleFinishedButton}>Finished</button>
        </>
    )

}

export default Booking