import { useState } from "react";

import ServiceItem from "../components/service-item";

const OptionPage = props => {
    const [option, setOption] = useState("")

    const serviceTypes = props.services.map((service) => {
		return (          
			    <ServiceItem key={service.id} service_type={service.service_type} description={service.description} price={service.price} />
		);
	});

    const handleSubmit = e => {
        e.preventDefault()
        console.log("Options Submitted")
    }


    return (
        <>
            <h1>Options Page</h1>
            <form onSubmit={handleSubmit}>
                {serviceTypes}
                <select onChange={e => setOption(e.target.value)}>
                    <option disabled>Please Select</option>
                    {props.services.map((service, index) => (
                        <option key={index} value={service?.service_type}>{service?.service_type} ${service?.price}</option>
                    ))}
                </select>
                <div>
                    {option}
                </div>
                <button>Submit</button>
            </form>
        </>
    )
}

export default OptionPage;