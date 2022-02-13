import { useState, useEffect } from "react";
import api from "../config/api";
import BookingsItem from "../components/booking-item"
import { SignTitle, AdminOuterBox, BackgroundImage2, BackgroundImage2a} from '../components/Styled'


const Admin = () => {
  const [bookings, setBookings] = useState([]);

    useEffect(() => {
        async function fetchData() {
          const data = await api.getBookings();
          if (data) {
            setBookings(data);
          }
        }
        fetchData();
      }, []);

    const bookingsItems = bookings.map((booking, index) => {
        return (
            <BookingsItem 
                key={index}
                id={booking.booking_id}
                serviceType={booking.service_type}
                make={booking.make} 
                model={booking.model}
                date={booking.date}
                firstName={booking.first_name}
                lastName={booking.last_name}
            />
        )
    })

  return (
    <BackgroundImage2a>
      <BackgroundImage2>
        <SignTitle>Jobs PinBoard</SignTitle>
        <AdminOuterBox>  
          {bookingsItems}
        </AdminOuterBox>  
      </BackgroundImage2>
    </BackgroundImage2a>
  );
};

export default Admin;
