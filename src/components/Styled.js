import styled from "styled-components";
import { Link } from "react-router-dom";

export const AdminDiv = styled.div`
  background-color: #c0c0c0;
  width: 100%;
  min-height: 100vh;
  background-image: url(/img1.jpg);
  background-size: cover;
`;
export const AdminTitle = styled.h1`
  margin-top: 0px;
  padding-top: 15px;
  width: 100%;
  text-align: center;
`;

export const JobsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
  align-items: flex-start;
  width: 75%;
  @media( max-width: 500px){
      width:100%;
  }
`;
export const Text = styled.p`
  margin: 2px;
`;
export const HomeBox1 = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
`;


export const HomeMargin = styled.div`
  padding: 25px 200px;
  margin: 0;
  @media (max-width: 800px) {
    padding: 0px 50px;
  }
  @media (max-width: 550px) {
    padding: 0px 10px;
  }
`;

export const PageTitle = styled.h1`
  display: flex;
  justify-content: center;
  color: white;
  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
`;

export const PageTitle2 = styled.h1`
  display: flex;
  justify-content: center;
`;

export const HomeNav = styled.nav`
  display: flex;
  background-color: #2e3335;
`;

export const HomeNav2 = styled.nav`
  display: flex;
  background-color: #f1d00a;
`;

export const HomeLink = styled.h4`
  padding: 20px;
  margin: 0px;
  white-space: nowrap;
  border: solid 1px;
  border-color: white;
  :hover {
    background-color: blue;
  }

  @media (max-width: 800px) {
    padding: 10px;
    white-space: normal;
  }
  @media (max-width: 650px) {
    padding: 5px;
  }
`;

export const HomeLink2 = styled.h4`
  padding: 20px;
  margin: 0px;
  white-space: nowrap;
  border: solid 1px;
  border-color: white;
  :hover {
    background-color: #3e7c17;
  }

  @media (max-width: 800px) {
    padding: 10px;
    white-space: normal;
  }
  @media (max-width: 650px) {
    padding: 5px;
  }
`;

export const HomeLinkWords = styled(Link)`
  text-decoration: none;
  color: white;
  :hover {
    color: black;
  }
  @media (max-width: 650px) {
    font-size: 0.8rem;
  }
`;

export const HomeLinkWords2 = styled(Link)`
  text-decoration: none;
  color: white;
  :hover {
    color: #f1d00a;
  }
  @media (max-width: 650px) {
    font-size: 0.8rem;
  }
`;

// float: left;
// display: flex;
export const BusinessTitle = styled.h1`
  margin: 10px auto;
  text-align: center;
  font-size: 40px;
  width: 100%;
  color: blue;
    @media (max-width: 550px) {
      font-size: 30px;
    }
    @media (max-width: 480px) {
        font-size: 25px;
      }
  `;

export const BusinessHeader = styled.h1`
  color: #332fd0;
`;

export const Service = styled.div`
  width: 70%;
  background-color: #f4f4f4;
  box-shadow: 2px 3px black;
  border: 1px ridge #2d2424;
  padding: 10px;
  margin: 0px auto 10px;
  opacity: 0.8;
`;

export const ServiceTitle = styled.h3`
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
`;
export const ServiceDescription = styled.p`
  text-align: center;
  margin: 0px;
`;

export const ServicePrice = styled.h4`
  text-align: center;
  margin-top: 5px;
  font-size: 14px;
`;

export const NavBox = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLinkWords = styled(Link)`
  text-decoration: none;
  margin: 5px;
  color: white;
  :hover {
    color: blue;
  }
  @media (max-width: 500px) {
    font-size: 12px
    margin: 0 auto;
    border:
  }
`;

export const AboutBox = styled.main`
  margin: 40px auto 0;
  width: 580px;
  padding: 20px;
  background-color: #2e3335;
  color: white;
  border: 2px solid white;
  border-radius: 5px;
  opacity: 0.93;
  @media (max-width: 700px) {
    width: 480px;
  }
  @media (max-width: 600px) {
    width: 400px;
    margin: 20px auto 0;
  }
  @media (max-width: 480px) {
    width: 280px;
  }
`;

export const SignTitle = styled.h1`
  margin-top: 0px;
  padding-top: 15px;
  display: flex;
  justify-content: center;
`;

export const SignForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 260px;
  padding: 20px;
  margin: 5px auto;
  background-color: #f4f4f4;
  border-radius: 10px;
  border: 1px ridge #2d2424;
  opacity: 0.96;
`;

export const SignForm1 = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  padding: 20px;
  margin: 5px auto;
  background-color: #f4f4f4;
  border-radius: 10px;
  border: 1px ridge #2d2424;
  opacity: 0.96;
`;

export const ErrorMessage = styled.h3`
  color: red;
  margin: 5px;
  display: flex;
  justify-content: center;

  @media (max-width: 500px) {
    font-size: 0.9rem;
  }
`;

export const ErrorMessage2 = styled.h5`
  color: red;
  margin: 5px;
  display: flex;
  justify-content: center;

  @media (max-width: 500px) {
    font-size: 0.9rem;
  }
`;

export const LinkE = styled(Link)`
  text-decoration: none;
  color: black;
  :hover {
    color: white;
  }
`;

export const SignButton = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonSignOut = styled.button`
  background-color: #2e3335;
  border: 0px;
  color: white;
  font-size: 16px;
  :hover {
    color: red;
  }
`;
export const UserText = styled.h4`
  margin: 5px 30px;
  color: white;
`;
export const BookingForm = styled.form`
  display: flex;
  width: 360px;
  padding: 10px;
  margin: 5px auto;
  background-color: #f4f4f4;
  border-radius: 10px;
  border: 1px ridge #2d2424;
  opacity: 0.96;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: 400px) {
    width: 90%;
  }
`;

export const Button = styled.button`
  margin: 10px 20px;
  padding: 7px;
  width: 70px;
  border: 1px solid black;
  border-radius: 2px;
  transition: 0.25s;
  :hover {
    color: white;
    background-color: #2e3335;
  }
`;
export const Button2 = styled.button`
  margin: 5px 10px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 2px;
  transition: 0.25s;
  :hover {
    color: white;
    background-color: #2e3335;
  }
`;

export const ButtonPlus = styled.button`
  width: 150px;
  border: 2px solid white;
  padding: 20px;
  background-color: blue;
  border-radius: 5px;
  color: white;
  opacity: 1;
  margin: 20px;
  :hover {
    color: blue;
    background-color: white;
    border-color: blue;
  }
  @media(max-width: 400px){
      margin: 5px
  }
`;

export const ButtonDiv = styled.div`
  text-align: center;
`;

export const BookingContainer = styled.div`
  margin: 10px auto 0;
`;

export const ConfirmBookingForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  padding: 10px;
  margin: 5px auto;
  background-color: #f4f4f4;
  border-radius: 10px;
  border: 1px ridge #2d2424;
  opacity: 0.96;

  @media (max-width: 800px) {
    width: 70%;
  }
  @media (max-width: 450px) {
    width: 90%;
  }
`;

export const ConfirmBookingTitle = styled.h1`
  display: flex;
  justify-content: center;

  @media (max-width: 800px) {
    font-size: 1.7rem;
  }
  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

export const AdminInnerBox = styled.section`
  background-color: #f4f4f4;
  border: 1px solid #2d2424;
  border-radius: 5px;
  padding: 10px;
  width: 250px;
  height: 220px;
  margin: 15px;
`;
 export const AdminInnerDiv = styled.div`
  margin-left: 20px;
 `

export const AdminOuterBox = styled.div`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
`;

export const DropDownBox = styled.option``;

// display: flex;
// flex-direction: column;
// align-items: center;
export const JobDetails = styled.div`
  width: 400px;
  padding: 10px;
  margin: 5px auto;
  background-color: #f4f4f4;
  border-radius: 10px;
  border: 1px ridge #2d2424;
  opacity: 0.96;
  @media (max-width: 450px) {
    width: 380px;
  }
`;
export const JobDiv = styled.div`
  margin: 20px 40px;
`;

export const BackgroundImage = styled.div`
  background-image: url(/img1.jpg);
  background-size: cover;
  width: 100%;
  min-height: 100vh;
`;

export const BackgroundImage2 = styled.div`
  background-image: url(/img2.jpg);
  background-size: contain;
`;

export const BackgroundImage2a = styled.div`
  background-image: url(/img2.jpg);
  background-size: cover;
  width: 100vw;
  height: 110vh;
`;

export const BackgroundImage3 = styled.div`
  background-image: url(/navbar3.jpg);
  background-size: cover;
`;

export const BackgroundImage4 = styled.div`
  background-image: url(/img3.jpg);
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

export const BackgroundImage5 = styled.div`
  background-image: url(/img3.jpg);
  width: 100%;
  background-size: cover;
  min-height: 110vh;
`;
