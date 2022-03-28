import { useContext } from "react";
import { Link } from "react-router-dom";
import ConfirmContext from "../utils/ConfirmContext";
import { useNavigate } from "react-router-dom";
import {
  SignTitle,
  ConfirmBookingForm,
  ConfirmBookingTitle,
  BackgroundImage,
  SignButton,
  JobDetails,
  Text,
  Button,
  Button2,
  JobDiv,
} from "../components/Styled";

const ConfirmBooking = () => {
  const { confirmContext } = useContext(ConfirmContext);
  const confirmBooking = confirmContext.booking;
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  return (
    <BackgroundImage>
      <SignTitle>Confirmation Page</SignTitle>
      <JobDetails>
        <JobDiv>
          <h2>Job: {confirmBooking.service_type}</h2>
          <Text>
            <b>Date:</b> {confirmBooking.date}
          </Text>
          <Text>Rego: {confirmBooking.rego}</Text>
          {confirmBooking.comment ? (
            <>
              <Text>
                <b>Comment:</b> {confirmBooking.comment}
              </Text>
            </>
          ) : (
            <></>
          )}
          <hr></hr>
          <Text>
            <b>Client:</b> {confirmBooking.first_name}{" "}
            {confirmBooking.last_name}
          </Text>
          <Text>Phone Number: {confirmBooking.phone_number}</Text>
          <Text>
            Address: {confirmBooking.street_number} {confirmBooking.street_name}
          </Text>
          <Text>Suburb: {confirmBooking.suburb}</Text>
          <Text>Postcode: {confirmBooking.postcode}</Text>
          <hr></hr>
        </JobDiv>
          <SignButton>
            <Button2 onClick={handleHome}>Home</Button2>
          </SignButton>
      </JobDetails>
    </BackgroundImage>
  );
};

export default ConfirmBooking;
