import { ServiceTitle, ServiceDescription, ServicePrice } from "./Styled";

const ServiceItem = ({ service_type, description, price }) => {
  return (
    <>
    <ServiceTitle>{service_type}</ServiceTitle>
    <ServiceDescription>{description}</ServiceDescription>
    <ServicePrice>${price}</ServicePrice>
    </>
  );
};

export default ServiceItem;
