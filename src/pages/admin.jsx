import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../config/api";
import { useGlobalState } from "../utils/StateContext";
import BookingsItem from "../components/booking-item"

const Admin = () => {
    
  const navigate = useNavigate();
  const { store } = useGlobalState();
  const { userSignedIn } = store;
  const [bookings, setBookings] = useState([]);

    // useEffect(async ()=> {

    //     if (userSignedIn != "admin"){
    //         navigate("/")
    //     } else {
    //         const data = await api.getBookings()
    //         if (data){
    //             console.log("bookings", data)
    //             setBookings(data)
    //         }
    //     }
    // },[])

    useEffect(() => {
        async function fetchData() {
          const data = await api.getBookings();
          if (data) {
            setBookings(data);
          }
        }
        fetchData();
      }, []);

    const bookingsItems = bookings.map((booking) => {
        return (
            <BookingsItem 
                key={booking.id}
                id={booking.id}
                date={booking.date}
                comment={booking.comment}
            />
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
