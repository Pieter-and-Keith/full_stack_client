import { BusinessTitle, HomeBox1, HomeLink, HomeNav, HomeLinkWords, PageTitle, AboutBox } from '../components/Styled'
import {useGlobalState} from '../utils/StateContext'

const About = () => {
    const {store} = useGlobalState()
	const {userSignedIn} = store

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

            <AboutBox>
                <PageTitle><u>About us</u></PageTitle>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis sapien quis nibh cursus blandit. Etiam ullamcorper lacus sed lacus condimentum rhoncus. Donec quis eros nec eros tristique sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris malesuada urna quis vulputate tempor. Nulla hendrerit egestas scelerisque. Pellentesque ac odio sit amet eros aliquet lacinia. Curabitur euismod justo et dui egestas, in vulputate sapien tincidunt. Nulla eleifend felis a augue egestas gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus non massa turpis. Curabitur in bibendum ligula, at laoreet augue. Quisque lorem diam, iaculis sed ultrices quis, venenatis at eros.</p>
            
                <section>
                    <p><strong>Contact: 0412 345 678</strong></p>
                    <p><strong>Email: SMSC@gmail.com</strong></p>
                </section>
            </AboutBox>

        </>
    )
}

export default About