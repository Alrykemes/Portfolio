import styled from "styled-components";

export const StyledCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #131212;
border-radius: 1.5rem;
padding: 1rem 2rem;
width: 225px;
margin: 2rem 1rem 2rem 1rem;
color: #EFE;

.icone {
    width: 1.7rem;
}

h3 {
    margin-top: .02rem;
    font-size: 1.5rem;
    float: left;
    display: flex;
}

p {
    margin: .02rem 0rem;
}

@media only screen and (max-width: 1024px) {
    margin: 1rem .5rem 1rem .5rem;

}

@media only screen and (max-width: 768px) {
    width: 125px;
    margin: .7rem;
    margin: 1rem .5rem 1rem .5rem;


    h3{
        font-size: 1rem;
    }

    p{
        font-size: .7rem;
    }
}

@media only screen and (max-width: 425px) {
    width: 65px;
    margin: 1rem .4rem 1rem .4rem;
    padding: .6rem .9rem;

    h3{
        margin-top: .01rem;
        font-size: .6rem;
    }

    p{
        margin: .01rem 0rem;
        font-size: .4rem;
    }

    .icone {
        width: .8rem;
    }
}

@media only screen and (max-width: 320px) {
    width: 55px;
    margin: 1rem .3rem 1rem .3rem;
    padding: .5rem .85rem;

    h3{
        margin-top: .01rem;
        font-size: .6rem;
    }

    p{
        margin: .01rem 0rem;
        font-size: .4rem;
    }

    .icone {
        width: .8rem;
    }
}
`;