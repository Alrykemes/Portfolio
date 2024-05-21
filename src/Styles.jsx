import styled from 'styled-components';

//section padrao
export const SectionStyled = styled.section`
margin: 0;
padding: 100px 0 0 0;
display: flex;
width: 100%;
min-height: 478px;
background-color: #272626;
`;

// Div padrao
export const Container = styled.div`

margin: 0;
padding: 0;
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
color: #EFE;
font-size: 1rem;

.alignAnimation {
    width: 78%;
    display: flex;
    align-items: start;
    padding: 0;
    margin-bottom: 3rem;
}

.alignFoto {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 86%;
}

.foto img {
    width: 250px;
    border-radius: 250px;
}

.technologies {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 65%;
    
    background-color: #131212;
    border-radius: 1.5rem;
}

.portfolio {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}

.contact {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-between;
    border-top: 2px solid #EFE;
    background-color: #272626;
}

.letrasInicio {
    align-items: start;
}

@media only screen and (max-width: 1024px) {
    .foto img {
        width: 200px;
    }
}

@media only screen and (max-width: 768px) {
    .foto img {
        width: 150px;
    }

    .technologies {
        margin-bottom: 6rem;
    }
}

@media only screen and (max-width: 425px) {
    .alignAnimation{
        margin-bottom: 2.3rem;
        width: 85%;
    }
        
    .technologies {
    
        width: 50%;
    }

    .foto img {
        width: 90px;
    }
}

@media only screen and (max-width: 320px) {
    .alignAnimation{
        margin-bottom: 2rem;
    }
        
    .technologies {
    
        width: 80%;
    }

    .foto {
        width: 28%;
    }

    .foto img {
        width: 80px;
    }
}


`;

//div das letras do inicio
export const Letras = styled.div`

padding: 0;
margin: 0;
width: 78%;
display: flex;
flex-direction: column;
align-items: center;
color: #EFE;
font-size: 1.5rem;

h1 {
    margin: 0;
    padding: 0;
}

.letrasInicio {
    float: left;
}

.apresentacao {
    display: flex;
    width: 70%;
    text-align: start;
    font-size: 1.3rem;
}

.azul {
    color: #39F ;
}

.sobreContainer {
    display: flex;
    align-items: center;
    margin: 0;   
}

.sobre {
    font-size: 2rem;
}

.txtSobre {
    font-size: 1.3rem;
    width: 100%;
}

.txtTecnologias {
    margin: 2rem 0;
    color: #EFE;
    font-size: 1.8rem;    
}

.txtPortfolio {
    margin: 0;
    text-align: center;
    color: #EFE;
    font-size: 2.5rem; 
}

@media only screen and (max-width: 768px) {
font-size: 1rem;

.apresentacao {
    font-size: .8rem;
}
}

@media only screen and (max-width: 425px) {

    .saudacoes {
        font-size: .8rem;
    }

    .azul {
        font-size: .8rem;
    }
    
    .apresentacao {
        font-size: .6rem;
    }

    .sobre {
    font-size: 1.5rem;
    }

    .txtSobre {
        font-size: .8rem;
        width: 100%;
    }

    .txtTecnologias {
        font-size: 1.3rem;    
    }

    .txtPortfolio {
        font-size: 1.3rem; 
    }

}

@media only screen and (max-width: 425px) {

    .saudacoes {
        font-size: .7rem;
    }

    .azul {
        font-size: .7rem;
    }
    
    .apresentacao {
        font-size: .5rem;
    }

    .sobre {
    font-size: 1.5rem;
    }

    .txtSobre {
        font-size: .8rem;
        width: 100%;
    }

    .txtTecnologias {
        font-size: 1.3rem;    
    }

    .txtPortfolio {
        font-size: 1.3rem; 
    }

}

`;

//div dos Buttoes do inicio
export const Botoes = styled.div`

margin: 0;
padding: 0;
width: 0;
background-color: #272626;
display: flex;
flex-direction: row;

Button {
    background-color: #39F;
    padding: .5rem 1rem;
    transition: 0.5s;
}

Button:hover {
    scale: 1.05;
    filter: drop-shadow(0 0 .8em #EFE);
}

a {
    text-decoration: none;
}

@media only screen and (max-width: 425px) {

    font-size: .8rem;

    Button {
    padding: .2rem .4rem;
}

}
`;

export const Contato = styled.div`

padding: 0;
width: 0;
background-color: #272626;
display: flex;
flex-direction: row;

Button {
    padding: 0;
    background-color: #EFE;
}

Button:hover {
    scale: 1.1;
    filter: drop-shadow(0 0 .4em #EFE);
}

img {
    width: 30px;
}

@media only screen and (max-width: 425px) {
    img {
        width: 23px;
    }
}
`;