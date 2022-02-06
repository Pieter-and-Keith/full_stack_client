import { useState } from "react";
import { useNavigate } from "react-router-dom"
import api from "../config/api"
import {Drop} from '../components/Styled'

const MakeBooking = (props) => {
    const navigate = useNavigate()

    const [option, setOption] = useState("")

    const [bookingData, setBookingData] = useState({
        // date: "",
        comment: ""
    })

    const handleChange = (e) => {
        const target = e.target;
            setBookingData({
                ...bookingData,
                [target.name]: target.value
            });
      };

    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = {
            option: option,
            // date: bookingData.date,
            comment: bookingData.comment
        } 
        const booking = await api.createBooking(data)
        if (booking){
            console.log("Successfully create a booking")
        }
        navigate("/")
    }

    return(
        <>
            <h1>Booking Page</h1>
            <form onSubmit={handleSubmit}>
                <select onChange={e => setOption(e.target.value)}>
                    <Drop disabled>Please Select</Drop>
                    {props.services.map((service, index) => (
                        <Drop key={index} value={service?.service_type}>{service?.service_type} ${service?.price}</Drop>
                    ))}
                </select>

                <div>
                    <label htmlFor="comment">Additional Comment:</label>
                    <textarea type="text" name="comment" value={bookingData.comment} onChange={handleChange}  />
                </div>

                <div>
                    <button>Submit</button>
                </div>
            </form>
        </>
    )
}

export default MakeBooking