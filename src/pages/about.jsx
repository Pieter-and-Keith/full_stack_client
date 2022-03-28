import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate("/make_booking");
  };
  const handleServices = () => {
    navigate("/services");
  };

  return (
    <BackgroundImage4>
      <HomeBox1>
        <BusinessTitle>Sydney Motor Service Center</BusinessTitle>

        <HomeNav></HomeNav>
      </HomeBox1>
      <ButtonDiv>
        <ButtonPlus onClick={handleServices}>Our Services</ButtonPlus>
        <ButtonPlus onClick={handleBooking}>Make a Booking</ButtonPlus>
      </ButtonDiv>
      <AboutBox>
        <p>
          Located in the CBD of Australia's biggest city, Sydney Motor Service
          Center was founded by George Smith in 1975. <br></br>
          Aussie owned and operated, SMSC has been for over 3 generations a
          benchmark for high quality repairs and services on a wide range of
          vehicles. From small hatchbacks to massive vans, no task is too big
          or too small for us.<br></br>
          We currenlty employ over 20 highly skilled technicians, each an expert
          in their field.<br></br>
          We keep the finger on the pulse and move along with all the latest
          developments in the industry. Therefore we have technicians inhouse
          that can deal with your electric car too.<br></br>
          Call, email or book via this site your next appointment with us.
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
