import { useEffect, useState } from "react"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import api from "../config/api"

import BookingContext from "../utils/BookingContext"


const Booking = () => {
    const navigate = useNavigate()
    const { bookingContext, setBookingContext } = useContext(BookingContext)
    const [ paidStatus, setPaidStatus] = useState({})
    const [ finishedStatus, setFinishedStatus] = useState({})
  
    useEffect(() => {
        async function fetchData() {
            const data = await api.getBooking(bookingContext.booking_id);
            if (data) {
            setBookingContext(data);
            }
        }
        fetchData();
        }, [paidStatus, finishedStatus]);


    const handleBackButton = () => {
        navigate("/admin")
    }

    const handlePaidButton = async () => {
        let paidData = {}
        if (bookingContext.paid === false){
            paidData = {
                paid: true
            }
        } else {
            paidData = {
                paid: false
            }
        }
        
        const data = await api.updatePaid(paidData, bookingContext.booking_id)
        setPaidStatus(data)
    }

    const handleFinishedButton = async () => {
        let finishedData = {}
        if (bookingContext.finished === false) {
            finishedData = {
                finished: true
            }
        } else {
            finishedData = {
                finished: false
            }
        }
        const data = await api.updateFinished(finishedData, bookingContext.booking_id)
        setFinishedStatus(data)
    }

    return (
        <>
            <h1>Job: {bookingContext.service_type}</h1>
            <h3>Date: {bookingContext.date}</h3>
            <h5>Car: {bookingContext.make} {bookingContext.model}</h5>
            <h5>First name: {bookingContext.first_name}</h5>
            <h5>Last name: {bookingContext.last_name}</h5>
            <p>Comment: {bookingContext.comment}</p>
            <button onClick={handleFinishedButton}>Update job status</button>
            {bookingContext.finished ? <h6>Job is finished</h6> : <h6>Job is not finished</h6>}
            <button onClick={handlePaidButton}>Update payment status</button>
            {bookingContext.paid ? <h6> Invoice is Paid</h6> : <h6>Invoice not paid</h6>}
            <button onClick={handleBackButton}>Back</button>
        </>
    )

}

export default Booking