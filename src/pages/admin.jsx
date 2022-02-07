import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import api from "../config/api"

const Admin = () => {

    const [bookings, setBookings] = useState([])

    useEffect(() => {
        async function fetchData() {
          const data = await api.getBookings();
          if (data) {
            setBookings(data);
          }
        }
        fetchData();
      },[]);
      console.log("BOOKINGS:", bookings)

    return(
        <>
        <h1>Admin Page</h1>
        </>
    )
}

export default Admin