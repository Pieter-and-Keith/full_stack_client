import { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"
import api from "../config/api"
import {Drop} from '../components/Styled'
import ConfirmContext from "../utils/ConfirmContext"
import {useGlobalState} from '../utils/StateContext'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MakeBooking = (props) => {
    const navigate = useNavigate()
    const {store} = useGlobalState()
    const {userSignedIn} = store
    const { setConfirmContext } = useContext(ConfirmContext);

    const [dateError, setDateError] = useState("")
    const [optionIdError, setOptionIdError] = useState("")

    useEffect(() => {
        if (!userSignedIn){
            navigate("/sign_in")
        } 
    })

    const [option, setOption] = useState("")
    const [comment, setComment] = useState("")
    const [transaction, setTransaction] = useState({
        finished: false,
        paid: false
    })
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
            setComment({
                [target.name]: target.value
            });
    };

    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = {
            option_id: option,
            date: selectedDate.jsDate,
            comment: comment.comment,
            finished: transaction.finished,
            paid: transaction.paid
        } 
        const booking = await api.createBooking(data);
        console.log(booking)
        if (!booking.booking_id) {
            { booking.date? setDateError(booking.date[0]) : setDateError("")}
            { booking.option_id? setOptionIdError(booking.option_id[0]) : setOptionIdError("")}
        } else {
            setConfirmContext({booking});
            navigate("/confirm_booking")    
        }
    }

    return(
        <>
            <h1 style={{display:"flex", margin:"0px", justifyContent:"center"}}>Booking Page</h1>
            { dateError ? <> <h3>Error: Date {dateError}</h3> </> : <> </> } 
            { optionIdError ? <> <h3>Error: Service {optionIdError}</h3> </> : <> </> }
            <form style={{display:"flex", flexDirection:"column" ,marginTop:"10px", marginRight:"300px", marginLeft:"300px"}}>
                <span>Serivce:</span>
                <select onChange={e => setOption(e.target.value)} defaultValue={'DEFAULT'} > 
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
                    <label htmlFor="comment">Additional Comment (Optional):</label>
                </div>
                <div>
                    <textarea type="text" name="comment" value={comment.comment} onChange={handleChange}  />
                </div>
                
                <div style={{display:"flex", marginTop:"10px", justifyContent:"center"}}>
                    <Link to="/"><button style={{margin:"5px"}}>Cancel</button></Link>
                    <button onClick={handleSubmit} style={{margin:"5px"}}>Confirm</button>
                </div>
            </form>
        </>
    )
}

export default MakeBooking