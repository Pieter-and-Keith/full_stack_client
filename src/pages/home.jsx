import {useGlobalState} from '../utils/StateContext'

import { HomeMargin, BusinessTitle, HomeBox1, HomeLink, HomeNav, HomeLinkWords, PageTitle } from '../components/Styled'
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
            
                <HomeNav>
                    <HomeLink><HomeLinkWords to="/">Car Services</HomeLinkWords></HomeLink>
                    <HomeLink><HomeLinkWords to="/about">About Us</HomeLinkWords></HomeLink>
                    { userSignedIn !== "admin" &&
                        <HomeLink><HomeLinkWords to="/make_booking">Booking</HomeLinkWords></HomeLink>
                    }
                </HomeNav>
            </HomeBox1>

            <HomeMargin>
                <PageTitle><u>Service Provide</u></PageTitle>
                {serviceTypes}
            </HomeMargin>
    
        </>
    )
}

export default Home