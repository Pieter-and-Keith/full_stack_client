import { Link, useNavigate } from "react-router-dom"

const ConfirmBooking = (props) => {
    const navigate = useNavigate()
    const confirmBooking = props.confirmContext.booking

    const handleClick = async (event) => {
        event.preventDefault()
        navigate("/")
    }

    return (
        <>
            <header>
                <h1 style={{display:"flex", margin:"0px", justifyContent:"center"}}><u>Sydey Motor Service Centre</u></h1>
            </header>
            <form style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"0px", marginRight:"300px", marginBottom:"0px", marginLeft:"300px", borderStyle:"solid", borderRadius:"15px"}}>
                <h1 style={{display:"flex", justifyContent:"center", margin:"5px"}}><u>Confirm Details</u></h1>
                <h3>Name: </h3> 
                    <span>{confirmBooking.first_name} {confirmBooking.last_name}</span>
                <h3>Email: </h3> 
                    <span>{confirmBooking.email}</span>
                <h3>Phone Number: </h3> 
                    <span>{confirmBooking.phone_number}</span>
                <h3>Address: </h3> 
                    <span>{confirmBooking.street_number} {confirmBooking.street_name}, {confirmBooking.suburb}, {confirmBooking.state}, {confirmBooking.postcode}</span>
                <h3>Selected Service: </h3> 
                    <span>{confirmBooking.service_type}</span>
                <h3>Selected Date: </h3> 
                    <span>{confirmBooking.date}</span>
                <h3>Car Rego: </h3> 
                    <span>{confirmBooking.rego}</span>
                <h3>Car Make: </h3> 
                    <span>{confirmBooking.make}</span>
                <h3>Car Model: </h3>
                    <span>{confirmBooking.model}</span>
                <h3>Additional Comment: </h3> 
                    <span>{confirmBooking.comment}</span>
                <div style={{display:"flex", marginTop:"10px", justifyContent:"center"}}>
                    <Link to="/make_booking"><button style={{margin:"5px"}}>Cacnel</button></Link>
                    <button onClick={handleClick} style={{margin:"5px"}}>Confirm</button>
                </div>
            </form>
        </>
    );
}

export default ConfirmBooking