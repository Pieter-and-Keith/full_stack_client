import styled from 'styled-components' 
import { Link } from 'react-router-dom';

export const AdminDiv = styled.div`
 background-color: #c0c0c0;
 width: 100%;
 height: 100vh;
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
`
export const AdminTitle = styled.h1`
    margin-top: 0px;
    padding-top: 15px;
    width: 100%;
    text-align: center;
`

export const JobsDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
`
export const Text = styled.p`
margin: 2px;
`
export const HomeBox1 = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 10px;
    `
    // background-image: url(/navbar3.jpg);
    // background-size: contain;

export const HomeMargin = styled.div`
    padding: 25px 200px;
    margin: 0;
    @media (max-width: 800px) {
        padding: 0px 50px;
    }
    @media (max-width: 550px) {
        padding: 0px 10px;
    }
    `
    // background-image: url(/img3.jpg);
    // background-size: 100%;

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
        background-color: blue;
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
        color: black;
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

export const BusinessTitle = styled.h1`
    float: left;
    display: flex;
    margin: 10px auto 10px 40px;
    align-item: center;
    width: 100%;
    color: blue;

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
export const BusinessHeader = styled.h1`
    color: #332fd0;
`

export const Service = styled.div`
    width: 70%;
    background-color: #f4f4f4;
    box-shadow: 2px 3px black;
    border: 1px ridge #2D2424;
    padding: 10px;
    margin: 0px auto 10px;
    opacity: 0.80;
`

export const ServiceTitle = styled.h2`
    margin-top: 10px;
    margin-bottom: 10px;
    text-align:center;
`
export const ServiceDescription =styled.p`
    text-align:center;
    margin: 0px;
`

export const ServicePrice = styled.h4`
    text-align: center;
    margin-top: 5px;
    font-size: 14px;
`

export const NavBox = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const NavLinkWords = styled(Link)`
    text-decoration: none;
    margin: 5px;
    color: white;
    :hover{
        color: blue;
    }
    @media (max-width: 500px) {
        font-size: 0.9rem;
    }
`


export const AboutBox = styled.main`
    margin: 10px auto;
    width: 580px;
    padding: 20px;
    background-color: #2e3335;
    color:white;
    border: 1px solid black;
    border-radius: 5px;
    opacity: 0.93;
    @media (max-width: 700px) {
        width: 480px;
    }
    @media (max-width: 600px) {
        width: 400px;
    }
    @media (max-width: 480px) {
        width:280px;
    }

    `

export const SignTitle = styled.h1`
    margin-top: 0px;
    padding-top: 15px;
    display: flex;
    justify-content: center;
`



export const SignForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 260px;
    padding: 20px;
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
        font-size: 0.9rem;
    }
`

export const ErrorMessage2 = styled.h5`
    color: red;
    margin: 5px;
    display: flex;
    justify-content: center;

    @media (max-width: 500px) {
        font-size: 0.9rem;
    }
`

export const LinkE = styled(Link)`
    text-decoration: none;
    color: black;
    :hover{
        color:white;
    }
`

export const SignButton = styled.div`
    display: flex;
    justify-content: center;
`

export const BookingForm = styled.form`
display: flex;
width: 360px;
padding: 10px;
margin: 5px auto;
background-color: #f4f4f4;
border-radius: 10px;
border: 1px ridge #2D2424;
opacity: 0.96;
flex-direction: column;
justify-content: flex-start;
@media (max-width: 400px) {
    width: 90%
}

`
// @media (max-width: 1400px) {
//     width: 30%
// }
// @media (max-width: 1100px) {
//     width: 35%
// }
// @media (max-width: 880px) {
//     width: 50%
// }
// @media (max-width: 625px) {
//     width: 70%
// }

export const Button = styled.button`
    margin: 10px 20px;
    padding: 5px;
    border: 1px solid black;
    border-radius: 2px;
    :hover{
        color:white;
        background-color: blue;
    }
`
export const ButtonPlus = styled.button`
    width: 150px;
    border: 2px solid white;
    padding: 20px;
    background-color: blue;
    border-radius: 5px;
    color: white;
    opcity: 1;
    margin: 20px;
    :hover{
        color:blue;
        background-color: white;
        border-color:blue;
    }
`

export const ButtonDiv = styled.div`
    text-align: center;
`

export const BookingContainer = styled.div`
    margin: 10px auto 0;
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
    background-color: white;
    box-shadow: 2px 3px black;
    border: 1px ridge #2D2424;
    padding: 10px;
    width: 250px;
    height: 220px;
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
    width: 100%;
    min-height: 100vh;
    `

export const BackgroundImage2 = styled.div`
    background-image: url(/img2.jpg);
    background-size: contain;
    
`

export const BackgroundImage2a = styled.div`
    background-image: url(/img2.jpg);
    background-size: cover;
    width: 100vw;
    height: 110vh;
`

export const BackgroundImage3 = styled.div`
    background-image: url(/navbar3.jpg);
    background-size: cover;
`


export const BackgroundImage4 = styled.div`
    background-image: url(/img3.jpg);
    background-size: cover;
    width: 100%;
    height: 100vh;
`

export const BackgroundImage5 = styled.div`
    background-image: url(/img3.jpg);
    width: 100%;
    background-size: cover;
    min-height: 110vh;
    `

