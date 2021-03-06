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
  Button2,
  JobDiv
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
        <SignTitle>
          Job Card
        </SignTitle>
      <JobDetails>
        <JobDiv>
        <h2>Job: {bookingContext.service_type}</h2>
        <Text><b>Date:</b> {bookingContext.date}</Text>
        <Text>
          <b>Client:</b> {bookingContext.first_name} {bookingContext.last_name}
        </Text>
        <Text>Rego: {bookingContext.rego}</Text>
        <Text>
          <b>Car: </b>{bookingContext.make} {bookingContext.model}
        </Text>
        {bookingContext.comment ? (
          <>
            <Text><b>Comment:</b> {bookingContext.comment}</Text>
          </>
        ) : (
          <></>
        )}
        <hr></hr>
        <Text><b>Job Status:</b> 
                {bookingContext.finished? (
                  " Finished"
                  ):(
                    " Unfinished"
                    )}
        </Text>
        <Button2 onClick={handleFinishedButton}>Update</Button2>
        <hr></hr>
        <Text><b>Payment Status:</b>
                {bookingContext.paid? (
                  " Paid"
                  ):(
                    " Unpaid"
                    )}
        </Text>
        <Button2 onClick={handlePaidButton}>Update</Button2>
          <hr></hr>
        <SignButton>
          <Button onClick={handleBackButton} style={{ margin: "10px" }}>
            Back
          </Button>
          <Button onClick={handleDeleteButton} style={{ margin: "10px" }}>
            Delete
          </Button>
        </SignButton>
        </JobDiv>
      </JobDetails>
    </BackgroundImage>
  );
};

export default Booking;
