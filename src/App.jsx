import { SectionStyled, Container, Letras, Botoes, Contato } from "./Styles";
import NavBar from "./components/Navbar/index";
import TextAnimation from "./components/TextAnimation/index";
import Button from "./components/Button/index";
import Icones from "./components/IconTec/index";
import CardProject from "./components/CardProject/index";
import CardContato from "./components/CardContato/index";
import Icon from "@mdi/react";
import { mdiDownload, mdiEmail, mdiHome, mdiLink, mdiPhone } from "@mdi/js";
import MyPhoto from "./assets/ftcurriculum.jpg";
import geradorDeSenha from "./assets/projetosImagens/geradorDeSenha.jpg";
import rickAndMorty from "./assets/projetosImagens/rickAndMortyApi.jpg";
import LoadingProj from "./assets/projetosImagens/LoadingProj.jpg";
import Whatsapp from "./assets/icons/whatsapp.svg";
import Gmail from "./assets/icons/gmail.svg";
import Linkedin from "./assets/icons/linkedin.svg";
import Github from "./assets/icons/github.svg";
import HtmlIcon from "./assets/icons/html.svg";
import CssIcon from "./assets/icons/css.svg";
import JsIcon from "./assets/icons/js.svg";
import ReactIcon from "./assets/icons/react.svg";
import JavaIcon from "./assets/icons/java.svg";
import MySqlIcon from "./assets/icons/mysql.svg";
import GitIcon from "./assets/icons/git.svg";


function App() {
  return (
    <>  
      <NavBar/>
      <SectionStyled id="inicio">
        <Container>
          <Container className="alignAnimation">
            <TextAnimation/>
          </Container>
          <Letras className="letrasInicio"> 
            <div className="foto">
            <img src={MyPhoto} width="250px" alt="Alrykemes Cavalcanti"/>
            </div>
            <h1 className="saudacoes">Oi, Sou o <span className="azul">Alrykemes Cavalcanti</span></h1>
            <h1 className="tagDev">Desenvolvedor FullStack</h1>
            <p className="apresentacao">Sou um desenvolvedor de software dedicado 
            em criar soluções criativas e inovadoras, sempre em busca de novos desafios
            para aplicar minhas tecnicas e habilidades. 
            </p>
          <Botoes>
            <a href="./assets/dowloads" download="CurriculoAlrykemes.pdf">
            <Button label={"Currículo"} label2={<Icon path={mdiDownload} size={1} />}/>
            </a>
            <a href="https://drive.google.com/drive/folders/1Xn4TrdqrkqLTqM-HXVw2AawuMNL8LEbB?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <Button label={"Certificações"} label2={<Icon path={mdiLink} size={1} />}/>
            </a>
          </Botoes>
          <Contato>
            <a href="https://api.whatsapp.com/send?phone=5581993294126&text=Ol%C3%A1,%20Gostaria%20de%20saber%20sobre%20Sua%20Atua%C3%A7%C3%A3o%20Profissional%20Alrykemes?" target="_blank" rel="noopener noreferrer">
            <Button label={<img src={Whatsapp} width="30px" title="Whatsapp" alt="Whatsapp"/>}/>
            </a>
            <a href="mailto:alrykemesgc@gmail.com?subject=Assunto&body=Digite sua mensagem" target="_blank" rel="noopener noreferrer">
            <Button label={<img src={Gmail} width="30px" title="Email" alt="Email"/>}/>
            </a>
            <a href="https://www.linkedin.com/in/alrykemes-cavalcanti-ab937a267/" target="_blank" rel="noopener noreferrer">
            <Button label={<img src={Linkedin} width="30px" title="Linkedin" alt="Linkedin"/>}/>
            </a>
            <a href="https://www.github.com/alrykemes" target="_blank" rel="noopener noreferrer">
            <Button label={<img src={Github} width="30px" title="Github" alt="Github"/>}/>
            </a>
          </Contato>
          </Letras>
        </Container>
      </SectionStyled>
  
      <SectionStyled id="sobre">
        <Container>
          <Letras className="sobreContainer">
            <h1 className="sobre">Sobre mim</h1>
            <p className="txtSobre">Graduando CST em Análise e Desenvolvimento de Sistemas, tenho 18 anos
            Focado em implementar, executar e integrar soluções tecnológicas, sempre em 
            aprimoramento e desenvolvimento de minhas habilidades. </p>
            <h1 className="txtTecnologias">Tecnologias</h1>
          </Letras>

          <Container className="technologies">
            <Icones svgLocal={HtmlIcon} titleIcon={"Html"}/>
            <Icones svgLocal={CssIcon} titleIcon={"Css"}/>
            <Icones svgLocal={JsIcon} titleIcon={"Js"}/>
            <Icones svgLocal={ReactIcon} titleIcon={"React"}/>
            <Icones svgLocal={JavaIcon} titleIcon={"Java"}/>
            <Icones svgLocal={MySqlIcon} titleIcon={"MySql"}/>
            <Icones svgLocal={GitIcon} titleIcon={"Git"}/>
          </Container>
        </Container>
      </SectionStyled>
      
      <SectionStyled id="portfolio">
        <Container>
          <Letras>
            <h1 className="txtPortfolio">Portfólio</h1>
          </Letras>
          <Container className="portfolio">
            <CardProject 
              linkProj={"https://alrykemes.github.io/GeradorDeSenhas/"}
              linkRepo={"https://github.com/Alrykemes/GeradorDeSenhas"}
              projImage={geradorDeSenha} 
              title="Gerador De Senhas" 
              descricao="O Gerador de senhas tem o intuito de gerar senhas seguras podendo ser editadas
              pelo usuário e medindo seu grau de segurança feito com Html, Css e JavaScript"
            />
            <CardProject
              linkProj={"https://characters-rickandmorty-web-api.vercel.app/"} 
              linkRepo={"https://github.com/Alrykemes/Characters-rickandmorty-WebApi"}
              projImage={rickAndMorty} 
              title="Rick and Morty Characters" 
              descricao="O Rick and Morty Characters é uma listagem dos personagens do desenho 
              feito com Html Css e JavaScript, para treinar a requisição e manipulação de Apis Json."
            />
            <CardProject 
              projImage={LoadingProj} 
              title="Loading" 
              descricao=""
            />
            <CardProject 
              projImage={LoadingProj} 
              title="Loading" 
              descricao=""
            />
          </Container>
        </Container>
      </SectionStyled>
      
      <footer id="contato">
          <Container>
            <Container className="contact">
              <CardContato 
              titleContato="Endereço" 
              pathIcon={mdiHome}
              content="CEP: 53441-480"
              content2="Rua Roberto Viana de Araújo -"
              content3="Maranguape I | Paulista - PE"
              />
              <CardContato 
              titleContato="Email" 
              pathIcon={mdiEmail}
              content={"alrykemesgc@gmail.com"}
              content2={<a href="mailto:alrykemesgc@gmail.com?subject=Assunto&body=Digite sua mensagem" target="_blank" rel="noopener noreferrer">
              <Button label={<img src={Gmail} width="30px" title="Email" alt="Email"/>}/>
              </a>}
              />
              <CardContato 
              titleContato="Telefone" 
              pathIcon={mdiPhone}
              content="+55 8199329-4126"
              content2={<a href="https://api.whatsapp.com/send?phone=5581993294126&text=Ol%C3%A1,%20Gostaria%20de%20saber%20sobre%20Sua%20Atua%C3%A7%C3%A3o%20Profissional%20Alrykemes?" target="_blank" rel="noopener noreferrer">
              <Button label={<img src={Whatsapp} width="30px" title="Whatsapp" alt="Whatsapp"/>}/>
              </a>}
              /> 
            </Container>
          </Container>
      </footer>
    </>
  );
}

export default App;
