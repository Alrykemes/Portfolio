import styled from 'styled-components';

//section padrao
export const SectionStyled = styled.section`
margin: 0;
padding: 0;
display: flex;
align-items: center;
width: 100%;
min-height: 738px;
background-color: #272626;
`;

// Div padrao
export const Container = styled.div`
margin: 0;
padding: 0;
display: flex;
flex-direction: column;
width: 100%;
background-color: #272626;
font-size: 1rem;

.alignAnimation {
    width: 0;
    padding: 0 0 3rem 6rem ;
}

.tecnologias {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-self: flex-start;
    align-items: center;
    margin-left: 8rem;
    width: 660px;
    
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

.contato {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    border-top: 2px solid #EFE;
}

`;

//div das letras do inicio
export const Letras = styled.div`

padding: 0;
margin: 0 2rem .1rem 0;
color: #EFE;
font-size: 1.5rem;

h1 {
    margin: 0;
    padding: 0;
}

.saudacoes {
    text-align: start;
    margin-left: 13rem;
}

.apresentacao {
    margin: 0 0 0 13rem;
    width: 700px;
    text-align: start;
    font-size: 1.3rem;
}

.tagDev {
    text-align: start;
    color: #39F;
    margin-left: 13rem;
}

.azul {
    color: #39F ;
}

.foto img {
    border-radius: 250px;
    display: flex;
    float: right;
    margin: 0 4rem 0 0;
}

.sobre {
    text-align: start;
    margin-left: 8rem;
    font-size: 2rem;
}

.txtSobre {
    text-align: start;
    margin-left: 8rem;
    font-size: 1.3rem;
    width: 680px;
}

.txtTecnologias {
    margin: 2rem 0 1rem 24rem;
    text-align: start;
    color: #EFE;
    font-size: 1.8rem;    
}

.txtPortfolio {
    margin: 0 0 2rem 2rem;
    text-align: center;
    color: #EFE;
    font-size: 2.5rem; 
}

`;

//div dos Buttoes do inicio
export const Botoes = styled.div`

margin: 0;
margin-left: 13rem;
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
`;

export const Contato = styled.div`

margin: 0 1rem 0 13rem;
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
`;