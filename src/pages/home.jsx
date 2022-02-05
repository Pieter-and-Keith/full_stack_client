import { useContext } from "react"
import { Link } from "react-router-dom"

import SignInContext from "../context/SignInContext"
import ServiceItem from "../components/service-item";
import Nav from "../components/navbar"

const Home = (props) => {
    const { signInContext } = useContext(SignInContext)

    const serviceTypes = props.services.map((service) => {
		return (          
			    <ServiceItem key={service.id} service_type={service.service_type} description={service.description} price={service.price} />
		);
	});

    return(
        <>
            <header style={{display:"flex", justifyContent:"center"}}>
                <h1 style={{margin:"0px"}}><u>Sydey Motor Service Centre</u></h1>
            </header>

            <nav style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
                <Link to="/"><h2 style={{padding:"20px", margin:"0px"}}>Car Services</h2></Link>
                <Link to="/options"><h2 style={{padding:"20px", margin:"0px"}}>About Us</h2></Link>
                <Link to="/make_booking"><h2 style={{padding:"20px", margin:"0px"}}>Booking</h2></Link>
            </nav>

            <main style={{marginTop:"0px", marginRight:"100px", marginBottom:"0px", marginLeft:"100px"}}>
                {serviceTypes}
            </main>
            
            {/* <h3>username: {props.userSignedIn && signInContext?.user?.username}</h3> 
            <h6>jwt: {props.userSignedIn && signInContext?.user?.jwt}</h6>  */}
        </>
    )
}

export default Home