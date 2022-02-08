import { useState} from "react"
import { useNavigate } from "react-router-dom"

import api from "../config/api";

const AdminOptionCreate = () => {
    const navigate = useNavigate()

    const [option, setOption] = useState({
        service_type: "",
        description: "",
        price: ""
    });

    const handleChange = (e) => {
        const target = e.target;
        setOption({
            ...option,
            [target.name]: target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault()
        const optionData = {
            service_type: option.service_type,
            description: option.description,
            price: option.price
        };
        await api.createOptions(optionData);
        navigate("/")
    };

    return(
        <>
            <h1>Create Options</h1>
            <form onSubmit={handleSubmit}>
                <div style={{padding:"10px"}}>
                    <label htmlFor="service_type">Service Type:</label>
                    <input type="text" name="service_type" value={option.service_type} onChange={handleChange} />
                </div>
                <div style={{padding:"10px"}}>
                    <label htmlFor="description">Description:</label>
                    <textarea type="text" name="description" value={option.description} onChange={handleChange}/>
                </div>
                <div style={{padding:"10px"}}>
                    <label htmlFor="price">Price($):</label>
                    <input type="text" name="price" value={option.price} onChange={handleChange}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default AdminOptionCreate