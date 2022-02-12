import { useState } from "react"
import { useNavigate } from "react-router-dom"

import api from "../config/api"
import { SignTitle, ErrorMessage2, SignForm, BackgroundImage } from '../components/Styled'

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
          { details.street_number? setStreetNumberError(details.street_number) : setStreetNumberError("")}
          { details.street_name? setStreetNameError(details.street_name[0]) : setStreetNameError("")}
          { details.suburb? setSuburbError(details.suburb[0]) : setSuburbError("")}
          { details.postcode? setPostcodeError(details.postcode) : setPostcodeError("")}
          { details.state? setStateError(details.state[0]) : setStateError("")}
          { details.rego? setRegoError(details.rego[0]) : setRegoError("")}
          { details.make? setMakeError(details.make[0]) : setMakeError("")}
          { details.model? setModelError(details.model[0]) : setModelError("")}
        } else {
        navigate("/")
        }
    }

    return(
        <BackgroundImage>
          <SignTitle>User detail Page</SignTitle>
          { firstNameError ? <> <ErrorMessage2>Error: First Name {firstNameError}</ErrorMessage2> </> : <> </> } 
          { lastNameError ? <> <ErrorMessage2>Error: Last Name {lastNameError}</ErrorMessage2> </> : <> </> }
          { phoneNumberError ? <> <ErrorMessage2>Error: Phone Number {phoneNumberError}</ErrorMessage2> </> : <> </> }
          { streetNumberError ? <> <ErrorMessage2>Error: Street Number {streetNumberError[0]} or {streetNumberError[1]}</ErrorMessage2> </> : <> </> }
          { streetNameError ? <> <ErrorMessage2>Error: Street Name {streetNameError}</ErrorMessage2> </> : <> </> }
          { suburbError ? <> <ErrorMessage2>Error: Suburb {suburbError}</ErrorMessage2> </> : <> </> }
          { postcodeError ? <> <ErrorMessage2>Error: Postcode {postcodeError[0]} or {postcodeError[1]}</ErrorMessage2> </> : <> </> }
          { stateError ? <> <ErrorMessage2>Error: State {stateError}</ErrorMessage2> </> : <> </> }
          { regoError ? <> <ErrorMessage2>Error: Rego {regoError}</ErrorMessage2> </> : <> </> }
          { makeError ? <> <ErrorMessage2>Error: Make {makeError}</ErrorMessage2> </> : <> </> }
          { modelError ? <> <ErrorMessage2>Error: Model {modelError}</ErrorMessage2> </> : <> </> }
          <SignForm onSubmit={handleOnSubmit}>
            <div>
              <label htmlFor="firstName">First name:</label>
              <br></br>
              <input type="text" name="firstName" id="firstName" value={data.firstName} onChange={handleChange}  />
            </div>
            <div>
              <label htmlFor="lastName">Last name:</label>
              <br></br>
              <input type="text" name="lastName" id="lastName" value={data.lastName} onChange={handleChange}  />
            </div>
            <div>
              <label htmlFor="phoneNumber">Phone Number:</label>
              <br></br>
              <input type="text" name="phoneNumber" id="phoneNumber" value={data.phoneNumber} onChange={handleChange}  />
            </div>
            <div>
              <label htmlFor="streetNumber">Street Number:</label>
              <br></br>
              <input type="text" name="streetNumber" id="streetNumber" value={data.streetNumber} onChange={handleChange}  />
            </div>
            <div>
              <label htmlFor="streetName">Street Name:</label>
              <br></br>
              <input type="text" name="streetName" id="streetName" value={data.streetName} onChange={handleChange}  />
            </div>
            <div>
              <label htmlFor="suburb">Suburb:</label>
              <br></br>
              <input type="text" name="suburb" id="suburb" value={data.suburb} onChange={handleChange}  />
            </div>
            <div>
              <label htmlFor="postcode">Postcode:</label>
              <br></br>
              <input type="text" name="postcode" id="postcode" value={data.postcode} onChange={handleChange}  />
            </div>
            <div>
              <label htmlFor="state">State:</label>
              <br></br>
              <input type="text" name="state" id="state" value={data.state} onChange={handleChange}  />
            </div>
            <div>
              <label htmlFor="rego">Rego:</label>
              <br></br>
              <input type="text" name="rego" id="rego" value={data.rego} onChange={handleChange}  />
            </div>
            <div>
              <label htmlFor="make">Make:</label>
              <br></br>
              <input type="text" name="make" id="make" value={data.make} onChange={handleChange}  />
            </div>
            <div>
              <label htmlFor="model">Model:</label>
              <br></br>
              <input type="text" name="model" id="model" value={data.model} onChange={handleChange}  />
            </div>

            <button type="submit" style={{margin: "10px"}}>submit</button>

          </SignForm>
        </BackgroundImage>
    )
}

export default UserDetails