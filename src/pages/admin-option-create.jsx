import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../config/api";
import ServiceCreatedContext from "../utils/ServiceCreatedContext";
import {
  SignTitle,
  BookingForm,
  SignButton,
  BackgroundImage,
  Button
} from "../components/Styled";

const AdminOptionCreate = () => {
  const navigate = useNavigate();
  const { setserviceCreatedContext } = useContext(ServiceCreatedContext);

  const [option, setOption] = useState({
    service_type: "",
    description: "",
    price: "",
  });

  const handleChange = (e) => {
    const target = e.target;
    setOption({
      ...option,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const optionData = {
      service_type: option.service_type,
      description: option.description,
      price: option.price,
    };
    const newOption = await api.createOptions(optionData);
    setserviceCreatedContext(newOption.id);
    navigate("/");
  };

  return (
    <BackgroundImage>
      <SignTitle>Create New Option</SignTitle>
      <BookingForm onSubmit={handleSubmit}>
        <div style={{ padding: "10px" }}>
          <label htmlFor="service_type">Service Name:</label>
          <br></br>
          <input
            type="text"
            name="service_type"
            id="service_type"
            value={option.service_type}
            onChange={handleChange}
          />
        </div>
        <div style={{ padding: "10px" }}>
          <label htmlFor="description">Description:</label>
          <br></br>
          <textarea
            rows="10"
            cols="39"
            type="text"
            id="description"
            name="description"
            value={option.description}
            onChange={handleChange}
          />
        </div>
        <div style={{ padding: "10px" }}>
          <label htmlFor="price">Price($):</label>
          <br></br>
          <input
            type="text"
            name="price"
            id="price"
            value={option.price}
            onChange={handleChange}
          />
        </div>
        <SignButton>
          <Button type="submit">
            Submit
          </Button>
        </SignButton>
      </BookingForm>
    </BackgroundImage>
  );
};

export default AdminOptionCreate;
