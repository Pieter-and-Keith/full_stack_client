import { useGlobalState } from "../utils/StateContext";

import {
  HomeMargin,
  BusinessTitle,
  HomeBox1,
  HomeLink,
  HomeNav,
  HomeLinkWords,
  PageTitle,
  BackgroundImage5,
  HomeNav2,
  HomeLink2,
  HomeLinkWords2,
} from "../components/Styled";
import ServiceItem from "../components/service-item";

const Home = (props) => {
  const { store } = useGlobalState();
  const { userSignedIn } = store;

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

  return (
    <BackgroundImage5>
      <HomeBox1>
        <BusinessTitle>
          <h1 style={{ margin: "0px" }}>
            Sydney Motor Service Centre
          </h1>
        </BusinessTitle>

        <HomeNav>
          <HomeLink>
            <HomeLinkWords to="/">Car Services</HomeLinkWords>
          </HomeLink>
          <HomeLink>
            <HomeLinkWords to="/about">About Us</HomeLinkWords>
          </HomeLink>
        </HomeNav>
        <HomeNav2>
          {userSignedIn !== "admin" && (
            <HomeLink2>
              <HomeLinkWords2 to="/make_booking">Make Booking</HomeLinkWords2>
            </HomeLink2>
          )}
        </HomeNav2>
      </HomeBox1>
      <HomeMargin>
        <PageTitle>Services Available</PageTitle>
        {serviceTypes}
      </HomeMargin>
    </BackgroundImage5>
  );
};

export default Home;
