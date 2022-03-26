import { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../config/api";
import {
  DropDownBox,
  SignTitle,
  BookingForm,
  SignButton,
  BackgroundImage,
  ErrorMessage,
  BookingContainer,
  Button
} from "../components/Styled";
import ConfirmContext from "../utils/ConfirmContext";
import { useGlobalState } from "../utils/StateContext";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MakeBooking = (props) => {
  const navigate = useNavigate();
  const { store } = useGlobalState();
  const { userSignedIn } = store;
  const { setConfirmContext } = useContext(ConfirmContext);

  const [dateError, setDateError] = useState("");
  const [optionIdError, setOptionIdError] = useState("");

  useEffect(() => {
    if (!userSignedIn) {
      navigate("/sign_in");
    }
  });

  const [option, setOption] = useState("");
  const [comment, setComment] = useState("");
  const [transaction] = useState({
    finished: false,
    paid: false,
  });
  const [selectedDate, setSelectedDate] = useState({ format: "MM/DD/YYYY" });
  const convert = (date, format = selectedDate.format) => {
    let object = { date, format };

    setSelectedDate({
      jsDate: date.toDateString(),
      ...object,
    });
  };
  const filterDays = (date) => {
    if (date.getDay() === 0 || date.getDay() === 6) {
      return false;
    } else {
      return true;
    }
  };

  const handleChange = (e) => {
    const target = e.target;
    setComment({
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      option_id: option,
      date: selectedDate.jsDate,
      comment: comment.comment,
      finished: transaction.finished,
      paid: transaction.paid,
    };
    const booking = await api.createBooking(data);
    if (!booking.booking_id) {
      {
        booking.date ? setDateError(booking.date[0]) : setDateError("");
      }
      {
        booking.option_id
          ? setOptionIdError(booking.option_id[0])
          : setOptionIdError("");
      }
    } else {
      setConfirmContext({ booking });
      navigate("/confirm_booking");
    }
  };

  return (
    <BackgroundImage>
      <SignTitle>Booking Page</SignTitle>
      {dateError ? (
        <>
          {" "}
          <ErrorMessage>Error: Date {dateError}</ErrorMessage>{" "}
        </>
      ) : (
        <> </>
      )}
      {optionIdError ? (
        <>
          {" "}
          <ErrorMessage>Error: Service {optionIdError}</ErrorMessage>{" "}
        </>
      ) : (
        <> </>
      )}
      <BookingForm>
        <BookingContainer>
          <div style={{ margin: "5px" }}>
            <span>Select service:</span>
            <br></br>
            <select
              onChange={(e) => setOption(e.target.value)}
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT" disabled>
                Please Select
              </option>
              {props.services.map((service, index) => (
                <DropDownBox key={index} value={service?.id}>
                  {service?.service_type}
                </DropDownBox>
              ))}
            </select>
          </div>
          <div style={{ margin: "5px" }}>
            <span>Please select the date: </span>
            <br></br>
            <DatePicker
              selected={selectedDate.date}
              onChange={convert}
              minDate={new Date()}
              filterDate={filterDays}
            />
          </div>
          <div style={{ margin: "5px" }}>
            <label htmlFor="comment">Additional Comment (optional):</label>
            <br></br>
            <textarea
              rows="8"
              cols="35"
              type="text"
              name="comment"
              value={comment.comment}
              onChange={handleChange}
            />
          </div>
        </BookingContainer>

        <SignButton>
          <Link to="/">
            <Button >Cancel</Button>
          </Link>
          <Button onClick={handleSubmit}>
            Confirm
          </Button>
        </SignButton>
      </BookingForm>
    </BackgroundImage>
  );
};

export default MakeBooking;
