import { Service, ServiceTitle, ServiceDescription, ServicePrice } from "./Styled";

const ServiceItem = ({ service_type, description, price }) => {
  return (
    <>
    <h3>{service_type}</h3>
    <p>{description}</p>
    <p>${price}</p>
    </>
    // <Service>
    //   <ServiceTitle>
    //     <u>{service_type}</u>
    //   </ServiceTitle>
    //   <ServiceDescription>{description}</ServiceDescription>
    //   <ServicePrice>
    //     Price: $<i>{price}</i>
    //   </ServicePrice>
    // </Service>
  );
};

export default ServiceItem;
