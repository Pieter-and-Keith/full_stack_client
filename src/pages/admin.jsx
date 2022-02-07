import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../config/api";
import { useGlobalState } from "../utils/StateContext";

const Admin = () => {
  const navigate = useNavigate();
  const { store } = useGlobalState();
  const { userSignedIn } = store;
  const [bookings, setBookings] = useState([]);

    useEffect(async ()=> {

        if (userSignedIn != "admin"){
            navigate("/")
        } else {
            console.log("Hi there")
            const data = await api.getBookings()
            if (data){
                console.log("bookings", data)
                setBookings(data)
            }
        }
    },[])

    const bookingsItems = bookings.map(( booking,index ) => {
        return (
           <div key={index}>
               <h3>ID: {booking.id}</h3>
               <h5>comment:{booking.comment}</h5>
               <h5>date:{booking.date}</h5>
           </div>
        )
    })

  return (
    <>
      <h1>Admin Page</h1>
      {bookingsItems}
    </>
  );
};

export default Admin;
