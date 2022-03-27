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
      <h3><u>Job:</u> {serviceType}</h3>
      <h4><u>Date:</u> {date}</h4>
      <h5>
        <u>Car:</u> {make} {model}
      </h5>
      <h5>
        <u>Client:</u> {firstName} {lastName}
      </h5>
      <button onClick={handleOnClick}>SHOW</button>
    </AdminInnerBox>
  );
};

export default BookingsItem;
