import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import api from "../config/api";
import BookingContext from "../utils/BookingContext";
import { AdminInnerBox } from "./Styled";

const BookingsItem = ({
  id,
  date,
  serviceType,
  make,
  model,
  firstName,
  lastName,
}) => {
  const navigate = useNavigate();
  const { setBookingContext } = useContext(BookingContext);

  const handleOnClick = async (event) => {
    event.preventDefault();
    const myBooking = await api.getBooking(id);
    setBookingContext(myBooking);
    navigate("/booking");
  };

  return (
    <AdminInnerBox>
      <h3>Job: {serviceType}</h3>
      <h4>Booking Date: {date}</h4>
      <h5>
        Car: {make} {model}
      </h5>
      <h5>
        Client Name: {firstName} {lastName}
      </h5>
      <button onClick={handleOnClick}>SHOW</button>
    </AdminInnerBox>
  );
};

export default BookingsItem;
