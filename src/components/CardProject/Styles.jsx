import styled from "styled-components";

export const StyledCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 500px;
border-radius: 2rem;
padding: 1rem;
margin: 1rem;
background-color: #131212;

.botoesDiv {
    display: flex;
    flex-wrap: wrap;
}

Button:hover {
    scale: 1.05;
    filter: drop-shadow(0 0 .8em #EFE);
}

img {
    width: 480px;
    border-radius: 1rem;
}

a img {
    width: 32px;
}

.icone {
    width: 32px;
}

h1 {
    color: #EFE;
    font-size: 1.3rem;
}

p {
    color: #EFE;
    font-size: 1rem;
}

@media only screen and (max-width: 425px) {

    width: 300px;

    img {
        width: 280px;
    }

    a img {
        width: 22px;
    }

    .icone {
        width: 22px;
    }

    h1 {
        color: #EFE;
        font-size: .95rem;
    }

    p {
        color: #EFE;
        font-size: .7rem;
    }
}

@media only screen and (max-width: 320px) {

width: 260px;

img {
    width: 220px;
}

a img {
    width: 22px;
}

.icone {
    width: 22px;
}

h1 {
    color: #EFE;
    font-size: .75rem;
}

p {
    color: #EFE;
    font-size: .5rem;
}
}

`;