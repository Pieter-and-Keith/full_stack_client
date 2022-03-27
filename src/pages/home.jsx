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
  BusinessHeader,
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
          <BusinessHeader style={{ margin: "0px" }}>
            Sydney Motor Service Centre
          </BusinessHeader>
        </BusinessTitle>

        <HomeNav>
          {/* <HomeLink>
            <HomeLinkWords to="/services">Car Services</HomeLinkWords>
          </HomeLink> */}
          {/* <HomeLink>
            <HomeLinkWords to="/">About Us</HomeLinkWords>
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
      <HomeMargin>
        <PageTitle>Services Available</PageTitle>
        {serviceTypes}
      </HomeMargin>
    </BackgroundImage5>
  );
};

export default Home;
