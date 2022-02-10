import { useContext, useState} from "react"
import { useNavigate } from "react-router-dom"

import api from "../config/api";
import ServiceCreatedContext from "../utils/ServiceCreatedContext";
import { SignTitle, BookingForm, SignButton } from '../components/Styled'


const AdminOptionCreate = () => {
    const navigate = useNavigate()
    const { setserviceCreatedContext } = useContext(ServiceCreatedContext)

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
        const newOption = await api.createOptions(optionData);
        setserviceCreatedContext(newOption.id)
        navigate("/")
    };

    return(
        <>
            <SignTitle>Create Options</SignTitle>
            <BookingForm onSubmit={handleSubmit}>
                <div style={{padding:"10px"}}>
                    <label htmlFor="service_type">Service Name:</label>
                    <br></br>
                    <input type="text" name="service_type" value={option.service_type} onChange={handleChange} />
                </div>
                <div style={{padding:"10px"}}>
                    <label htmlFor="description">Description:</label>
                    <br></br>
                    <textarea rows="15" cols="40" type="text" name="description" value={option.description} onChange={handleChange}/>
                </div>
                <div style={{padding:"10px"}}>
                    <label htmlFor="price">Price($):</label>
                    <br></br>
                    <input type="text" name="price" value={option.price} onChange={handleChange}/>
                </div>
                <SignButton>
                    <button type="submit" style={{margin:"10px"}}>Submit</button>
                </SignButton>
            </BookingForm>
        </>
    )
}

export default AdminOptionCreate