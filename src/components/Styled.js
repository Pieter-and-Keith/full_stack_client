import styled from 'styled-components' 

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

export const HomeLink = styled.h4`
    padding: 20px;
    margin: 0px
`

export const BusinessTitle = styled.header`
    float: left;
    display: flex;
    align-items: center;
    width: 80%;
`

export const Service = styled.div`
    background-color: blue;
    padding: 10px;
    margin: 5px;
`

export const ServiceTitle = styled.h2`
    margin: 10px 0;
`

export const ServicePrice = styled.h4`
    margin: 10px 0;
`

export const DropDownBox = styled.option`
`
