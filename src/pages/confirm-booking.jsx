import { useContext } from "react";
import { Link } from "react-router-dom";
import ConfirmContext from "../utils/ConfirmContext";
import {
  SignTitle,
  ConfirmBookingForm,
  ConfirmBookingTitle,
  BackgroundImage,
} from "../components/Styled";

const ConfirmBooking = () => {
  const { confirmContext } = useContext(ConfirmContext);
  const confirmBooking = confirmContext.booking;

  return (
    <BackgroundImage>
      <ConfirmBookingTitle>
        <i>Sydney Motor Service Centre</i>
      </ConfirmBookingTitle>
      <ConfirmBookingForm>
        <SignTitle>
          <u>Confirm Details</u>
        </SignTitle>
        <h3>Name: </h3>
        <span>
          {confirmBooking.first_name} {confirmBooking.last_name}
        </span>
        <h3>Email: </h3>
        <span>{confirmBooking.email}</span>
        <h3>Phone Number: </h3>
        <span>{confirmBooking.phone_number}</span>
        <h3>Address: </h3>
        <span>
          {confirmBooking.street_number} {confirmBooking.street_name},{" "}
          {confirmBooking.suburb}, {confirmBooking.state},{" "}
          {confirmBooking.postcode}
        </span>
        <h3>Selected Service: </h3>
        <span>{confirmBooking.service_type}</span>
        <h3>Selected Date: </h3>
        <span>{confirmBooking.date}</span>
        <h3>Car Rego: </h3>
        <span>{confirmBooking.rego}</span>
        <h3>Car Make: </h3>
        <span>{confirmBooking.make}</span>
        <h3>Car Model: </h3>
        <span>{confirmBooking.model}</span>
        {confirmBooking.comment ? (
          <>
            <h3>Additional Comment:</h3>
            <span>{confirmBooking.comment}</span>
          </>
        ) : (
          <></>
        )}
        <div style={{ marginTop: "15px" }}>
          <Link to="/">
            <button style={{ margin: "10px" }}>Home</button>
          </Link>
        </div>
      </ConfirmBookingForm>
    </BackgroundImage>
  );
};

export default ConfirmBooking;
