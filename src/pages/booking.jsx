import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../config/api";

import BookingContext from "../utils/BookingContext";
import {
  SignButton,
  JobDetails,
  SignTitle,
  BackgroundImage,
  Text,
} from "../components/Styled";

const Booking = () => {
  const navigate = useNavigate();
  const { bookingContext, setBookingContext } = useContext(BookingContext);
  const [paidStatus, setPaidStatus] = useState({});
  const [finishedStatus, setFinishedStatus] = useState({});

  useEffect(() => {
    async function fetchData() {
      const data = await api.getBooking(bookingContext.booking_id);
      if (data) {
        setBookingContext(data);
      }
    }
    fetchData();
  }, [paidStatus, finishedStatus]);

  const handleBackButton = () => {
    navigate("/admin");
  };

  const handlePaidButton = async () => {
    let paidData = {};
    if (bookingContext.paid === false) {
      paidData = {
        paid: true,
      };
    } else {
      paidData = {
        paid: false,
      };
    }

    const data = await api.updatePaid(paidData, bookingContext.booking_id);
    setPaidStatus(data);
  };

  const handleFinishedButton = async () => {
    let finishedData = {};
    if (bookingContext.finished === false) {
      finishedData = {
        finished: true,
      };
    } else {
      finishedData = {
        finished: false,
      };
    }
    const data = await api.updateFinished(
      finishedData,
      bookingContext.booking_id
    );
    setFinishedStatus(data);
  };

  const handleDeleteButton = async () => {
    await api.deleteBooking(bookingContext.booking_id);
    navigate("/admin");
  };

  return (
    <BackgroundImage>
      <JobDetails>
        <SignTitle>
          <u>Details</u>
        </SignTitle>
        <h2>Job: {bookingContext.service_type}</h2>
        <Text>Date: {bookingContext.date}</Text>
        <Text>
          Car: {bookingContext.make} {bookingContext.model}
        </Text>
        <Text>
          Client: {bookingContext.first_name} {bookingContext.last_name}
        </Text>
        {bookingContext.comment ? (
          <>
            <Text>Comment: {bookingContext.comment}</Text>
          </>
        ) : (
          <></>
        )}
        <button onClick={handleFinishedButton}>Update job status</button>
        {bookingContext.finished ? (
          <h3 style={{ color: "green" }}>Job is finished</h3>
        ) : (
          <h3 style={{ color: "red" }}>Job is NOT finished</h3>
        )}
        <button onClick={handlePaidButton}>Update payment status</button>
        {bookingContext.paid ? (
          <h3 style={{ color: "green" }}> Invoice is Paid</h3>
        ) : (
          <h3 style={{ color: "red" }}>Invoice NOT paid</h3>
        )}
        <SignButton>
          <button onClick={handleBackButton} style={{ margin: "10px" }}>
            Back
          </button>
          <button onClick={handleDeleteButton} style={{ margin: "10px" }}>
            Delete
          </button>
        </SignButton>
      </JobDetails>
    </BackgroundImage>
  );
};

export default Booking;
