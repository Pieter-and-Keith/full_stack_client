import { useState, useEffect } from "react";

const Options = () => {

    const [services, setServices] = useState({})

    useEffect( async () => {
		
        const response = await fetch("/api/options");
		let servicesReply = await response.json();
        console.log(servicesReply)
        // setServices( servicesReply )
        // console.log("services state:", services)
    },[])

    return (
        <>
            <h1>Options Page</h1>
            {/* {services.map((service, index) => (
                <div key={index}>
                <h1>{service.service_type}</h1>
                <p>{service.description}</p>
                </div>
            ))} */}
        </>
    )

}

export default Options