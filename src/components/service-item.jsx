const ServiceItem = ({ service_type, description, price }) => {
	return (
        <>
			<h2>{service_type}</h2>
            <p>{description}</p>
            <h4>Price: ${price}</h4>
        </>
	);
};

export default ServiceItem;

