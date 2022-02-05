import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../config/api"

import SignInContext from "../context/SignInContext"


const UserDetails = () => {
    const { signInContext, setSignInContext } = useContext(SignInContext)
    const navigate = useNavigate()

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        streetNumber: "",
        streetName: "",
        suburb:"",
        postcode:"",
        state: "",
        rego:"",
        make:"",
        model:""
    });

    const handleChange = (e) => {
        const target = e.target;
            setData({
                ...data,
                [target.name]: target.value
            });
      };

    const handleOnSubmit = async (event) => {
        event.preventDefault()

        const detailsData = {
            first_name: data.firstName,
            last_name: data.lastName,
            phone_number: data.phoneNumber,
            street_number: parseInt(data.streetNumber),
            street_name: data.streetName,
            suburb: data.suburb,
            postcode: parseInt(data.postcode),
            state: data.state,
            rego: data.rego,
            make: data.make,
            model: data.model
        } 
        const details = await api.inputDetails(detailsData)
        if (details){
            console.log("entered details successfull")
        }
        navigate("/")
    }

    return(
        <>
        <h2>User detail Page</h2>
        <h3>Welcome: {signInContext?.user?.username}</h3> 
        <h6>jwt: {signInContext?.user?.jwt}</h6>
        <form onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="firstName">First name:</label>
          <input type="text" name="firstName" value={data.firstName} onChange={handleChange}  />
        </div>
        <div>
          <label htmlFor="lastName">Last name:</label>
          <input type="text" name="lastName" value={data.lastName} onChange={handleChange}  />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="text" name="phoneNumber" value={data.phoneNumber} onChange={handleChange}  />
        </div>
        <div>
          <label htmlFor="streetNumber">Street Number:</label>
          <input type="text" name="streetNumber" value={data.streetNumber} onChange={handleChange}  />
        </div>
        <div>
          <label htmlFor="streetName">Street Name:</label>
          <input type="text" name="streetName" value={data.streetName} onChange={handleChange}  />
        </div>
        <div>
          <label htmlFor="suburb">Suburb:</label>
          <input type="text" name="suburb" value={data.suburb} onChange={handleChange}  />
        </div>
        <div>
          <label htmlFor="postcode">Postcode:</label>
          <input type="text" name="postcode" value={data.postcode} onChange={handleChange}  />
        </div>
        <div>
          <label htmlFor="state">State:</label>
          <input type="text" name="state" value={data.state} onChange={handleChange}  />
        </div>
        <div>
          <label htmlFor="rego">Rego:</label>
          <input type="text" name="rego" value={data.rego} onChange={handleChange}  />
        </div>
        <div>
          <label htmlFor="make">Make:</label>
          <input type="text" name="make" value={data.make} onChange={handleChange}  />
        </div>
        <div>
          <label htmlFor="model">Model:</label>
          <input type="text" name="model" value={data.model} onChange={handleChange}  />
        </div>
            <button type="submit">submit</button>
        </form>
        </>
    )
}

export default UserDetails