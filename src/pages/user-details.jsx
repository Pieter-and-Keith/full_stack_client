import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

import Context from "../context/SignInContext"


const UserDetails = () => {
    const { context, setContext } = useContext(Context)
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
    
    const handleOnSubmit = async (event)=> {
        event.preventDefault()

        console.log("firstName: ", data.firstName)
        console.log("lastName: ", data.lastName)
        console.log("phoneNumber: ", data.phoneNumber)
        console.log("streetNumber: ", parseInt(data.streetNumber))
        console.log("streetName: ", data.streetName)
        console.log("suburb: ", data.suburb)
        console.log("postcode: ", parseInt(data.postcode))
        console.log("state: ", data.state)
        console.log("rego: ", data.rego)
        console.log("make: ", data.make)
        console.log("model: ", data.model)
        // console.log("jwt: ", context.user.jwt)

        // const options = {
        //     method:"POST",
        //     headers: {
        //         Accept: "application/json",
        //         Authorization: `Bearer ${context.user.jwt}`,
        //         "Content-Type": "application/json;charset=UTF-8"
        //     },
        //     body: JSON.stringify({  
        //                             "first_name": firstName,
        //                             "last_name": lastName,
        //                             "phone_number": phoneNumber,
        //                             "street_number": streetNumber,
        //                             "street_name": streetName,
        //                             "suburb": suburb,
        //                             "postcode": postcode,
        //                             "state": state,
        //                             "rego": rego,
        //                             "make": make,
        //                             "model": model
        //                         })
        // }
        // const userDetailsResponse = await fetch("api/details", options)
        // const userDetails = await userDetailsResponse.json()
        // console.log(userDetails)
        // setContext({userDetails})
        // navigate("/")
    }

    return(
        <>
        <h2>User detail Page</h2>
        <h3>Welcome: {context?.user?.username}</h3> 
        <h6>jwt: {context?.user?.jwt}</h6>
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