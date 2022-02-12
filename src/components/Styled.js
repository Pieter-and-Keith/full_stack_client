import styled from 'styled-components' 
import { Link } from 'react-router-dom';

export const HomeBox1 = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-image: url(/navbar3.jpg);
    background-size: contain;
    padding: 10px;
`

export const HomeMargin = styled.main`
    padding: 0px 200px;
    background-image: url(/img3.jpg);
    background-size: contain;
    margin: 50px 0 0 0;

    @media (max-width: 800px) {
        padding: 0px 50px;
    }
    @media (max-width: 550px) {
        padding: 0px 10px;
    }
`

export const PageTitle = styled.h1`
    display: flex;
    justify-content: center;
    color: white;
    @media (max-width: 800px) {
        font-size: 1.5rem;
    }
`

export const PageTitle2 = styled.h1`
    display: flex;
    justify-content: center;
`

export const HomeNav = styled.nav`
    display: flex;
    background-color: #2E3335;
`

export const HomeNav2 = styled.nav`
    display: flex;
    background-color: #F1D00A;
`

export const HomeLink = styled.h4`
    padding: 20px;
    margin: 0px;
    white-space: nowrap;
    border: solid 1px;
    border-color: white;
    :hover {
        background-color: #DA1212;
    }

    @media (max-width: 800px) {
        padding: 10px;
        white-space: normal;
    }
    @media (max-width: 650px) {
        padding: 5px;
    }
`

export const HomeLink2 = styled.h4`
    padding: 20px;
    margin: 0px;
    white-space: nowrap;
    border: solid 1px;
    border-color: white;
    :hover {
        background-color: #3E7C17;
    }

    @media (max-width: 800px) {
        padding: 10px;
        white-space: normal;
    }
    @media (max-width: 650px) {
        padding: 5px;
    }
`

export const HomeLinkWords = styled(Link)`
    text-decoration: none;
    color: white;
    :hover {
        color: #2E3335;
    }
    @media (max-width: 650px) {
        font-size: 0.8rem;
    }
`

export const HomeLinkWords2 = styled(Link)`
    text-decoration: none;
    color: white;
    :hover {
        color: #F1D00A;
    }
    @media (max-width: 650px) {
        font-size: 0.8rem;
    }
`

export const BusinessTitle = styled.header`
    float: left;
    display: flex;
    align-items: center;
    width: 80%;
    color: white;

    @media (max-width: 800px) {
        font-size: 0.8rem;
    }
    @media (max-width: 650px) {
        font-size: 0.6rem;
    }
    @media (max-width: 500px) {
        font-size: 0.5rem;
    }
    @media (max-width: 300px) {
        font-size: 0.3rem;
    }

`

export const Service = styled.div`
    background-color: #f4f4f4;
    box-shadow: 2px 3px black;
    border: 1px ridge #2D2424;
    padding: 10px;
    margin: 5px;
    opacity: 0.80;
`

export const ServiceTitle = styled.h2`
    margin: 10px 0;
    text-transform: capitalize;
`

export const ServicePrice = styled.h4`
    margin: 10px 0;
`

export const NavBox = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const NavLinkWords = styled(Link)`
    text-decoration: none;
    margin: 5px;
    color: blue;
    :hover {
        color: red;
    }
    @media (max-width: 500px) {
        font-size: 0.9rem;
    }
`

export const AboutBox = styled.main`
    margin: 10px 300px;
    padding: 0 20px;
    background-color: #f4f4f4;
    box-shadow: 2px 3px black;
    border: 1px ridge #2D2424;
    opacity: 0.9;

    @media (max-width: 1200px) {
        margin: 10px 50px;
    }
    @media (max-width: 500px) {
        margin: 5px 20px;
    }
    @media (max-width: 350px) {
        margin: 2px 5px;
    }
`

export const SignTitle = styled.h1`
    display: flex;
    justify-content: center;
`

export const SignForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    padding: 10px;
    margin: 5px auto;
    background-color: #f4f4f4;
    border-radius: 10px;
    border: 1px ridge #2D2424;
    opacity: 0.96;

    @media (max-width: 800px) {
        width: 50%
    }
    @media (max-width: 450px) {
        width: 75%
    }
`

export const ErrorMessage = styled.h3`
    color: red;
    margin: 5px;
    display: flex;
    justify-content: center;

    @media (max-width: 500px) {
        font-size: 0.7rem;
    }
`

export const LinkE = styled(Link)`
    text-decoration: none;
    color: black;
`

export const SignButton = styled.div`
    display: flex;
    justify-content: center;
`

export const BookingForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 30%;
    padding: 10px;
    margin: 5px auto;
    background-color: #f4f4f4;
    border-radius: 10px;
    border: 1px ridge #2D2424;
    opacity: 0.96;

    @media (max-width: 1400px) {
        width: 50%
    }
    @media (max-width: 850px) {
        width: 75%
    }
    @media (max-width: 550px) {
        width: 90%
    }
    @media (max-width: 450px) {
        width: 95%
    }
`

export const ConfirmBookingForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    padding: 10px;
    margin: 5px auto;
    background-color: #f4f4f4;
    border-radius: 10px;
    border: 1px ridge #2D2424;
    opacity: 0.96;

    @media (max-width: 800px) {
        width: 70%
    }
    @media (max-width: 450px) {
        width: 90%
    }
`

export const ConfirmBookingTitle = styled.h1`
    display: flex;
    justify-content: center;

    @media (max-width: 800px) {
        font-size: 1.7rem;
    }
    @media (max-width: 500px) {
        font-size: 1.2rem;
    }
`

export const AdminInnerBox = styled.section`
    background-color: #F2EECB;
    box-shadow: 2px 3px black;
    border: 1px ridge #2D2424;
    padding: 10px;
    width: 22.4%;
    margin: 5px;

    @media (max-width: 1250px) {
        width: 28%;
    }
    @media (max-width: 700px) {
        width: 40%;
    }
    @media (max-width: 500px) {
        width: 85%;
    }
`

export const AdminOuterBox = styled.div`
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
`

export const DropDownBox = styled.option`
`

export const JobDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    padding: 10px;
    margin: 5px auto;
    background-color: #f4f4f4;
    border-radius: 10px;
    border: 1px ridge #2D2424;
    opacity: 0.96;

    @media (max-width: 800px) {
        width: 70%
    }
    @media (max-width: 450px) {
        width: 90%
    }
`

export const BackgroundImage = styled.div`
    background-image: url(/img1.jpg);
    background-size: cover;
    width: 100vw;
    height: 100vh;
`

export const BackgroundImage2 = styled.div`
    background-image: url(/img2.jpg);
    background-size: cover;
    background-repeat: repeat-y;
    width: 100vw;
    height: 100vh;
`

export const BackgroundImage3 = styled.div`
    background-image: url(/navbar3.jpg);
    background-size: cover;
`


export const BackgroundImage4 = styled.div`
    background-image: url(/img4.jpg);
    background-size: cover;
    width: 100vw;
    height: 100vh;
`

export const BackgroundImage5 = styled.div`
    background-image: url(/img5.jpg);
    background-size: cover;
    width: 100vw;
    height: 30vh;
`