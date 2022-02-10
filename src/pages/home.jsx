import { Link } from "react-router-dom"
import {useGlobalState} from '../utils/StateContext'

import { HomeMargin, BusinessTitle, HomeBox1, HomeLink } from '../components/Styled'
import ServiceItem from "../components/service-item";

const Home = (props) => {
    const {store} = useGlobalState()
	const {userSignedIn} = store

    const serviceTypes = props.services.map((service) => {
		return (          
			<ServiceItem key={service.id} service_type={service.service_type} description={service.description} price={service.price} />
		);
	});

    return(
        <>
            <HomeBox1>
                <BusinessTitle>
                    <h1 style={{margin:"0px"}}>Sydney Motor Service Centre</h1>
                </BusinessTitle>
            
                <nav style={{display:"flex", backgroundColor:"#2E3335"}}>
                    <Link to="/"><HomeLink>Car Services</HomeLink></Link>
                    <Link to="/about"><HomeLink>About Us</HomeLink></Link>
                    { userSignedIn !== "admin" &&
                        <Link to="/make_booking"><HomeLink>Booking</HomeLink></Link>
                    }
                </nav>
            </HomeBox1>

            <HomeMargin>
                {serviceTypes}
            </HomeMargin>
    
        </>
    )
}

export default Home