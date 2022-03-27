import { useContext } from "react";
import { Link } from "react-router-dom";
import ConfirmContext from "../utils/ConfirmContext";
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

  return (
    <BackgroundImage>
      <SignTitle>Confirmation Page</SignTitle>
      <JobDetails>
        <JobDiv>
        {/* <h2>Job: {confirmBooking.service_type}</h2> */}
        {/* <Text><b>Date:</b> {confirmBooking.date}</Text> */}
        {/* <Text>
          <b>Client:</b> {confirmBooking.first_name} {confirmBooking.last_name}
        </Text> */}
        {/* <Text>Rego: {confirmBooking.rego}</Text> */}
        {/* {confirmBooking.comment ? (
          <>
            <Text><b>Comment:</b> {confirmBooking.comment}</Text>
          </>
        ) : (
          <></>
        )} */}
        {/* <hr></hr> */}
        </JobDiv>
      </JobDetails>
    </BackgroundImage>
  );
};

export default ConfirmBooking;
