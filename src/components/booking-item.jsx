import { Link, useNavigate } from "react-router-dom"
import api from "../config/api";

const BookingsItem = ({id, date, comment,}) => {
    const navigate = useNavigate();

    const handleOnClick = async (event) => {
        event.preventDefault()
        const myBooking = await api.getBooking(id)
    }


    return (
        <div>
            <h3>ID {id}</h3>
            <h4>date {date}</h4>
            <p>comment {comment}</p>
            <button onClick={handleOnClick}>SHOW</button>
        </div>
    )

}

export default BookingsItem