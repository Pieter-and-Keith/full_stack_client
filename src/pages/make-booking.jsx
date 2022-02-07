import { useState } from "react";
import { useNavigate } from "react-router-dom"
import api from "../config/api"
import {Drop} from '../components/Styled'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MakeBooking = (props) => {
    const navigate = useNavigate()

    const [option, setOption] = useState("")
    const [bookingData, setBookingData] = useState("")
    const [selectedDate, setSelectedDate] = useState({ format: "MM/DD/YYYY" });
    const convert = (date, format = selectedDate.format) => {
        let object = { date, format }
    
        setSelectedDate({
          jsDate: date.toDateString(),
          ...object
        })
      }
    const filterDays = (date) => {
        if (date.getDay() === 0 || date.getDay() === 6) {
            return false;
        } else {
            return true;
        }
    }  

    const handleChange = (e) => {
        const target = e.target;
            setBookingData({
                [target.name]: target.value
            });
      };

    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = {
            option_id: option,
            date: selectedDate.jsDate,
            comment: bookingData.comment
        } 
        console.log(data)
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
                <span>Serivce:</span>
                <select onChange={e => setOption(e.target.value)} defaultValue={'DEFAULT'}> 
                    <option value="DEFAULT" disabled>Please Select</option>
                    {props.services.map((service, index) => (
                        <Drop key={index} value={service?.id}>{service?.service_type} ${service?.price}</Drop>
                    ))}
                </select>
                
                <div>
                    <span>Please select the date: </span>
                    <DatePicker selected={selectedDate.date} onChange={convert} minDate={new Date()} filterDate={filterDays} />
                </div>

                <div>
                    <label htmlFor="comment">Additional Comment:</label>
                </div>
                <div>
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