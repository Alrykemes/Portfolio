import { NavbarStyled } from "./Styles";
import { useState } from "react";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleHamburger = () => {
            let bars = document.querySelectorAll('.bar')
            bars.forEach(bar => bar.classList.toggle('x'))
        }

    const toggleMenu = () => {
        setIsOpen((open) => !open);
        toggleHamburger();
    }
    return(
        <header>
        <NavbarStyled>
                    <div className="logoName">
                        <a href="#inicio">
                        <h1>Alrykemes</h1>
                        </a>
                    </div>
                    <div className="menuDesktop">
                        <ul className="menuDrop">
                            <li className="trigger" onClick={toggleMenu}>
                            <a className="nav-toggle">
                                <span className="bar"></span>
                                <span className="bar"></span>
                                <span className="bar"></span>
                            </a>
                            </li>
                            <li className={`liDesktop ${isOpen ? "isOpen" : ""}`}>
                                <a id="inicioMenu" href="#inicio" onClick={toggleMenu}><h3>Início</h3></a>
                                <a id="sobreMenu" href="#sobre" onClick={toggleMenu}><h3>Sobre</h3></a>
                                <a id="portfolioMenu" href="#portfolio" onClick={toggleMenu}><h3>Portfólio</h3></a>
                                <a id="contatoMenu" href="#contato" onClick={toggleMenu}><h3>Contato</h3></a>         
                            </li>
                        </ul>
                    </div>
        </NavbarStyled>
        </header>
    );
}

export default NavBar;