import styled from 'styled-components' 
import { Link } from 'react-router-dom';

export const HomeBox1 = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const HomeMargin = styled.main`
    margin: 0px 100px;

    @media (max-width: 800px) {
        margin: 0px 50px;
    }
`

export const PageTitle = styled.h2`
    display: flex;
    justify-content: center;
`

export const HomeNav = styled.nav`
    display: flex;
    background-color: #2E3335;
`

export const HomeLink = styled.h4`
    padding: 20px;
    margin: 0px;
    white-space: nowrap;
    border: solid 1px;
    border-color: white;
    :hover {
        background-color: #FF0000;
    }
`

export const HomeLinkWords = styled(Link)`
    text-decoration: none;
    color: white;
    :hover {
        color: #2E3335;
    }
`

export const BusinessTitle = styled.header`
    float: left;
    display: flex;
    align-items: center;
    width: 80%;
`

export const Service = styled.div`
    background-color: #f4f4f4;
    box-shadow: 2px 3px black;
    border: 1px ridge #2D2424;
    padding: 10px;
    margin: 5px;
`

export const ServiceTitle = styled.h2`
    margin: 10px 0;
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
`

export const AboutBox = styled.main`
    margin: 10px 300px;
    padding: 0 20px;
    background-color: #f4f4f4;
    box-shadow: 2px 3px black;
    border: 1px ridge #2D2424;
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
    margin: 5px auto;
    background-color: #f4f4f4;
    border-radius: 10px;
    border: 1px ridge #2D2424;
`

export const ErrorMessage = styled.h3`
    color: red;
    margin: 5px;
    display: flex;
    justify-content: center;
`

export const LinkE = styled(Link)`
    text-decoration: none;
    color: black;
`

export const SignButton = styled.div`
    display: flex;
    justify-content: center;
`

export const DropDownBox = styled.option`
`
