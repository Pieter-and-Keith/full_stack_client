const ServiceItem = ({ service_type, description, price }) => {
	return (
        <>
			<h2><u>{service_type}</u></h2>
            <p>{description}</p>
            <h4>Price: $<i>{price}</i></h4>
        </>
	);
};

export default ServiceItem;

