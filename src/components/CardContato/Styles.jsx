import styled from "styled-components";

export const StyledCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #131212;
border-radius: 1.5rem;
padding: 1rem 2rem;
width: 225px;
margin: 2rem;
color: #EFE;

h3 {
    margin-top: .02rem;
    font-size: 1.5rem;
    float: left;
    display: flex;
}

p {
    margin: .02rem 0rem;
}

@media only screen and (max-width: 768px) {
    width: 125px;
    margin: .7rem;

    h3{
        font-size: 1rem;
    }

    p{
        font-size: .7rem;
    }
}
`;