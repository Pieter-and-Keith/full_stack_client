import { useGlobalState } from "../utils/StateContext";
import {useNavigate} from "react-router-dom"

import {
  AboutBox,
  BackgroundImage4,
  ButtonPlus,
  ButtonDiv,
  HomeMargin,
  BusinessTitle,
  HomeBox1,
  HomeLink,
  HomeNav,
  HomeLinkWords,
  PageTitle,
  BackgroundImage5,
  BusinessHeader,
} from "../components/Styled";
import ServiceItem from "../components/service-item";

const Home = (props) => {
  const { store } = useGlobalState();
  const { userSignedIn } = store;
  const navigate = useNavigate()

  const serviceTypes = props.services.map((service) => {
    return (
      <ServiceItem
        key={service.id}
        service_type={service.service_type}
        description={service.description}
        price={service.price}
      />
    );
  });
  const handleBooking = () => {
    navigate("/make_booking")
  }
  const handleServices = () => {
    navigate("/services")
  }

  return (
    <BackgroundImage5>
    <HomeBox1>
      <BusinessTitle>
        Sydney Motor Service Center
      </BusinessTitle>

      <HomeNav>
      </HomeNav>
    </HomeBox1>
      <ButtonDiv>
        <ButtonPlus onClick={handleServices}>Car Services</ButtonPlus>
        <ButtonPlus onClick={handleBooking}>Make booking</ButtonPlus>
      </ButtonDiv>
    <AboutBox>
    {serviceTypes}
    </AboutBox>
  </BackgroundImage5>

 
  );
};

export default Home;
