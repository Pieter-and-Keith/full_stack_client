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
  Button,
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
          <u>Job Card</u>
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
        <Text>Job Status:</Text>
        {bookingContext.finished ? (
          <Text style={{ color: "green" }}>Finished</Text>
        ) : (
          <Text style={{ color: "red" }}>Unfinished</Text>
        )}
        <Button onClick={handleFinishedButton}>Update</Button>
        <Text>Payment Status:</Text>
        {bookingContext.paid ? (
          <Text style={{ color: "green" }}>Paid</Text>
        ) : (
          <Text style={{ color: "red" }}>Unpaid</Text>
        )}
        <Button onClick={handlePaidButton}>Update</Button>
        <SignButton>
          <Button onClick={handleBackButton} style={{ margin: "10px" }}>
            Back
          </Button>
          <Button onClick={handleDeleteButton} style={{ margin: "10px" }}>
            Delete
          </Button>
        </SignButton>
      </JobDetails>
    </BackgroundImage>
  );
};

export default Booking;
