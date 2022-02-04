import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import Context from "../context/context"


const UserDetails = () => {
    const { context, setContext } = useContext(Context)
    const navigate = useNavigate()

    const handleOnSubmit = async (event)=> {
        event.preventDefault()

        const firstName = event.target.firstName.value 
        const lastName = event.target.lastName.value 
        const phoneNumber = event.target.phoneNumber.value
        const streetNumber = parseInt(event.target.streetNumber.value)
        const streetName = event.target.streetName.value
        const suburb = event.target.suburb.value 
        const postcode = parseInt(event.target.postcode.value)
        const state = event.target.state.value 
        const rego = event.target.rego.value 
        const make = event.target.make.value 
        const model = event.target.model.value

        console.log("firstName: ", firstName)
        console.log("lastName: ", lastName)
        console.log("phoneNumber: ", phoneNumber)
        console.log("streetNumber: ", streetNumber)
        console.log("streetName: ", streetName)
        console.log("suburb: ", suburb)
        console.log("postcode: ", postcode)
        console.log("state: ", state)
        console.log("rego: ", rego)
        console.log("make: ", make)
        console.log("model: ", model)
        console.log("jwt: ", context.user.jwt)

        const options = {
            method:"POST",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${context.user.jwt}`,
                "Content-Type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify({  
                                    "first_name": firstName,
                                    "last_name": lastName,
                                    "phone_number": phoneNumber,
                                    "street_number": streetNumber,
                                    "street_name": streetName,
                                    "suburb": suburb,
                                    "postcode": postcode,
                                    "state": state,
                                    "rego": rego,
                                    "make": make,
                                    "model": model
                                })
        }
        const userDetailsResponse = await fetch("api/details", options)
        const userDetails = await userDetailsResponse.json()
        console.log(userDetails)
        setContext({userDetails})
        navigate("/")
    }

    return(
        <>
        <h2>User detail Page</h2>
        <h3>Welcome: {context?.user?.username}</h3> 
        <h6>jwt: {context.user?.jwt}</h6>
        <form onSubmit={handleOnSubmit}>
            <label htmlFor="firstName">First Name: </label>
            <input type="text" name="firstName" />

            <label htmlFor="lastName">Last Name: </label>
            <input type="text" name="lastName" />

            <label htmlFor="phoneNumber">Phone Number: </label>
            <input type="text" name="phoneNumber" />

            <label htmlFor="streetNumber">Street Number: </label>
            <input type="text" name="streetNumber" />

            <label htmlFor="streetName">Street Name: </label>
            <input type="text" name="streetName" />

            <label htmlFor="suburb">Suburb: </label>
            <input type="text" name="suburb" />

            <label htmlFor="postcode">Postcode: </label>
            <input type="text" name="postcode" />

            <label htmlFor="state">State: </label>
            <input type="text" name="state" />

            <label htmlFor="rego">Rego: </label>
            <input type="text" name="rego" />

            <label htmlFor="make">Make: </label>
            <input type="text" name="make" />

            <label htmlFor="model">Model: </label>
            <input type="text" name="model" />
            <button type="submit">submit</button>
        </form>
        </>
    )
}

export default UserDetails