import { useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../config/api"

const UserDetails = () => {
    const navigate = useNavigate()

    const [firstNameError, setFirstNameError] = useState("")
    const [lastNameError, setLastNameError] = useState("")
    const [phoneNumberError, setPhoneNumberError] = useState("")
    const [streetNumberError, setStreetNumberError] = useState("")
    const [streetNameError, setStreetNameError] = useState("")
    const [suburbError, setSuburbError] = useState("")
    const [postcodeError, setPostcodeError] = useState("")
    const [stateError, setStateError] = useState("")
    const [regoError, setRegoError] = useState("")
    const [makeError, setMakeError] = useState("")
    const [modelError, setModelError] = useState("")


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
        if (!details.id) {
          { details.first_name? setFirstNameError(details.first_name[0]) : setFirstNameError("")}
          { details.last_name? setLastNameError(details.last_name[0]) : setLastNameError("")}
          { details.phone_number? setPhoneNumberError(details.phone_number[0]) : setPhoneNumberError("")}
          { details.street_number? setStreetNumberError(details.street_number[0]) : setStreetNumberError("")}
          { details.street_name? setStreetNameError(details.street_name[0]) : setStreetNameError("")}
          { details.suburb? setSuburbError(details.suburb[0]) : setSuburbError("")}
          { details.postcode? setPostcodeError(details.postcode[0]) : setPostcodeError("")}
          { details.state? setStateError(details.state[0]) : setStateError("")}
          { details.rego? setRegoError(details.rego[0]) : setRegoError("")}
          { details.make? setMakeError(details.make[0]) : setMakeError("")}
          { details.model? setModelError(details.model[0]) : setModelError("")}
        } else {
        navigate("/")
        }
    }

    return(
        <>
        <h2>User detail Page</h2>
        { firstNameError ? <> <h3>Error: First Name {firstNameError}</h3> </> : <> </> } 
        { lastNameError ? <> <h3>Error: Last Name {lastNameError}</h3> </> : <> </> }
        { phoneNumberError ? <> <h3>Error: Phone Number {phoneNumberError}</h3> </> : <> </> }
        { streetNumberError ? <> <h3>Error: Street Number {streetNumberError}</h3> </> : <> </> }
        { streetNameError ? <> <h3>Error: Street Name {streetNameError}</h3> </> : <> </> }
        { suburbError ? <> <h3>Error: Suburb {suburbError}</h3> </> : <> </> }
        { postcodeError ? <> <h3>Error: Postcode {postcodeError}</h3> </> : <> </> }
        { stateError ? <> <h3>Error: State {stateError}</h3> </> : <> </> }
        { regoError ? <> <h3>Error: Rego {regoError}</h3> </> : <> </> }
        { makeError ? <> <h3>Error: Make {makeError}</h3> </> : <> </> }
        { modelError ? <> <h3>Error: Model {modelError}</h3> </> : <> </> }
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