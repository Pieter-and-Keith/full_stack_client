import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import api from "../config/api"
import {useGlobalState} from '../utils/StateContext'


const Admin = () => {
    const navigate = useNavigate()
    const {store} = useGlobalState()
    const {userSignedIn} = store

    useEffect(() => {
        if (userSignedIn != "admin"){
            navigate("/")
        } else {
            console.log("SignedIn user:", userSignedIn)
        }
    })

 
    return(
        <>
            <h1>Admin Page</h1>
            {/* {bookings.map((booking, index)=>{
                <div key={index} value={booking.id}>
                    <p>{booking?.date}</p>
                    <p>{booking?.comment}</p>
                </div>
            })} */}
        </>
    )
}

export default Admin