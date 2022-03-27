import {useNavigate} from "react-router-dom"
import { useGlobalState } from "../utils/StateContext";
import {
  BusinessTitle,
  HomeBox1,
  HomeLink,
  HomeNav,
  HomeLinkWords,
  PageTitle2,
  AboutBox,
  BackgroundImage4,
  HomeNav2,
  HomeLinkWords2,
  HomeLink2,
} from "../components/Styled";

const About = () => {
  const { store } = useGlobalState();
  const { userSignedIn } = store;
  const navigate = useNavigate()

  const handleBooking = () => {
    navigate("/make_booking")
  }

  return (
    <BackgroundImage4>
      <HomeBox1>
        <BusinessTitle>
          <h1 style={{ margin: "10px" }}>
            Sydney Motor Service Center
          </h1>
        </BusinessTitle>

        <HomeNav>
          <HomeLink>
            <HomeLinkWords to="/services">Car Services</HomeLinkWords>
          </HomeLink>
          {/* <HomeLink>
            <HomeLinkWords to="/about">About Us</HomeLinkWords>
          </HomeLink> */}
        </HomeNav>
        <HomeNav>
          {userSignedIn !== "admin" && (
            <HomeLink>
              <HomeLinkWords to="/make_booking">Make Booking</HomeLinkWords>
            </HomeLink>
          )}
        </HomeNav>
      </HomeBox1>
      <AboutBox>
        <PageTitle2>
          <u>About us</u>
        </PageTitle2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
          sapien quis nibh cursus blandit. Etiam ullamcorper lacus sed lacus
          condimentum rhoncus. Donec quis eros nec eros tristique sagittis.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Mauris malesuada urna quis vulputate tempor.
          Nulla hendrerit egestas scelerisque. Pellentesque ac odio sit amet
          eros aliquet lacinia. Curabitur euismod justo et dui egestas, in
          vulputate sapien tincidunt. Nulla eleifend felis a augue egestas
          gravida. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Vivamus non massa turpis. Curabitur in
          bibendum ligula, at laoreet augue. Quisque lorem diam, iaculis sed
          ultrices quis, venenatis at eros.
        </p>

        <section>
          <p>
            <strong>Contact: 0412 345 678</strong>
          </p>
          <p>
            <strong>Email: SMSC@gmail.com</strong>
          </p>
        </section>
        <button onClick={handleBooking}>Make booking</button>
      </AboutBox>
    </BackgroundImage4>
  );
};

export default About;
