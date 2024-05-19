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
align-items: center;
width: 100%;
color: #EFE;
font-size: 1rem;

.alignAnimation {
    width: 0;
    padding: 0 0 3rem 6rem ;
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
    align-content: center;
    justify-content: center;
    border-top: 2px solid #EFE;
    background-color: #272626;
}

@media only screen and (max-width: 768px) {


}

`;

//div das letras do inicio
export const Letras = styled.div`

padding: 0;
margin: 0 2rem .1rem 0;
width: 70%;
display: flex;
flex-direction: column;
align-items: start;
color: #EFE;
font-size: 1.5rem;


h1 {
    margin: 0;
    padding: 0;
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

.foto {
    display: flex;
    position: absolute;
    margin-left: 65%;
}

.foto img {
    border-radius: 250px;
    display: flex;
}

.sobreContainer {
 align-items: center;   
}

.sobre {
    text-align: center;
    font-size: 2rem;
}

.txtSobre {
    text-align: start;  
    font-size: 1.3rem;
    width: 100%;
}

.txtTecnologias {
    margin: 2rem 0 1rem 0rem;
    text-align: center;
    color: #EFE;
    font-size: 1.8rem;    
}

.txtPortfolio {
    margin: 0 0 2rem 2rem;
    text-align: center;
    color: #EFE;
    font-size: 2.5rem; 
}

@media only screen and (max-width: 1024px) {
    .foto img {
        width: 200px;
    }

@media only screen and (max-width: 768px) {
font-size: 1rem;

.foto img {
 width: 150px;    
}

.foto{
    margin-left: 60%;
}

.apresentacao {
    font-size: .8rem;
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

@media only screen and (max-width: 768px) {

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

@media only screen and (max-width: 768px) {
    
}
`;