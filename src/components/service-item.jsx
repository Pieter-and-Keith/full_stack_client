const ServiceItem = ({ id, service_type }) => {
	return (
		<div>
            <h2>{id}</h2>
			<h2>{service_type}</h2>
		</div>
	);
};

export default ServiceItem;

