import { Service, ServiceTitle, ServicePrice } from './Styled'

const ServiceItem = ({ service_type, description, price }) => {
	return (
        <Service>
			<ServiceTitle><u>{service_type}</u></ServiceTitle>
            <p>{description}</p>
            <ServicePrice>Price: $<i>{price}</i></ServicePrice>
        </Service>
	);
};

export default ServiceItem;

