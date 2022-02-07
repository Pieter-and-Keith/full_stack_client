import { useState } from "react";

const OptionPage = props => {
    const [option, setOption] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        console.log("Options Submitted")
    }

    return (
        <>
            <h1>Options Page</h1>
            <form onSubmit={handleSubmit}>
                <select onChange={e => setOption(e.target.value)}>
                    <option value="">Select your option</option>
                    {props.services.map((service, index) => (
                        <option key={index} value={service?.id}>{service?.id}. {service?.service_type} ${service?.price}</option>
                    ))}
                </select>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </>
    )
}

export default OptionPage;