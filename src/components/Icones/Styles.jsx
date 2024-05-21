import styled from "styled-components";

export const StyledIcon = styled.div`
display: flex;
flex-direction: column;
margin: 2rem 2rem;

img {
    width: 69px;
    transition: 0.3s;
}

img:hover {
    scale: 1.05;
    filter: drop-shadow(0 0 .8em #39F);
}

p {
    margin: .3rem 0 0 0;
    color: #999999;
    font-size: 1.4rem;
    text-align: center;
    font-weight: bold;
    
}

@media only screen and (max-width: 425px){

    margin: 1rem 1rem;

    img {
        width: 35px;
    }

    p {
        font-size: .8rem;
    }
}

`;