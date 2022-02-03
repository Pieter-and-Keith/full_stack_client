import { useState, useEffect } from "react";

import api from "../config/api";
import ServiceItem from "../components/service-item";

const OptionPage = () => {
    const [options, setOptions] = useState([])

    useEffect(async () => {
        const data = await api.getOptions();
            if (data) {
                console.log("options", data);
                setOptions(data);
            }
    }, []);

    const serviceTypes = options.map((option) => {
		return (
			<ServiceItem 
                key={option.id} 
                id={option.id} 
                service_type={option.service_type}
            />
		);
	});

    return (
        <>
            <h1>Options Page</h1>
            {serviceTypes}
        </>
    )
}

export default OptionPage;