import { Link, useNavigate } from "react-router-dom"
import api from "../config/api";

const BookingsItem = ({id, date, comment,}) => {
    const navigate = useNavigate();


    // const handleSubmit = async (event) => {
    //     event.preventDefault()
    //     const userData = {
    //         email: data.email,
    //         password: data.password
    //     };
    //     const user = await api.signIn(userData);
    //     dispatch({type: 'setToken', data: user.jwt});
    //     dispatch({type: 'setUserSignedIn', data: user.username});
    //     sessionStorage.setItem("token", user.jwt);
    //     sessionStorage.setItem("user", user.username);
    //     navigate("/")
    // };

    const handleOnClick = async (event) => {
        event.preventDefault()
        const myBooking = await api.getBooking(id)
    }


    return (

        <h1>Booking Item</h1>
        // <div>
        //     <h3>ID {id}</h3>
        //     <h4>date {date}</h4>
        //     <p>comment {comment}</p>
        //     <button onClick={handleOnClick}>SHOW</button>
        // </div>
    )

}

export default BookingsItem