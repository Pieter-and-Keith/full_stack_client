import {useNavigate} from "react-router-dom"
import { useGlobalState } from "../utils/StateContext";
import {
  BusinessTitle,
  HomeBox1,
  HomeNav,
  AboutBox,
  BackgroundImage4,
  ButtonPlus,
  ButtonDiv,
} from "../components/Styled";

const About = () => {
  const { store } = useGlobalState();
  const { userSignedIn } = store;
  const navigate = useNavigate()

  const handleBooking = () => {
    navigate("/make_booking")
  }
  const handleServices = () => {
    navigate("/services")
  }

  return (
    <BackgroundImage4>
      <HomeBox1>
        <BusinessTitle>
          Sydney Motor Service Center
        </BusinessTitle>

        <HomeNav>
        </HomeNav>
      </HomeBox1>
        <ButtonDiv>
          <ButtonPlus onClick={handleServices}>Our Services</ButtonPlus>
          <ButtonPlus onClick={handleBooking}>Make a Booking</ButtonPlus>
        </ButtonDiv>
      <AboutBox>
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
      </AboutBox>
    </BackgroundImage4>
  );
};

export default About;
