import { NavbarStyled } from "./Styles";
import { useState } from "react";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((open) => !open);

        let triggerEl = document.querySelector('.trigger')
        let navToggleEl = document.querySelector('.nav-toggle')
        let inicioMenuEl = document.querySelector('#inicioMenu')
        let sobreMenuEl = document.querySelector('#sobreMenu')
        let portfolioMenuEl = document.querySelector('#portfolioMenu')
        let contatoMenuEl = document.querySelector('#contatoMenu')
        let bars = document.querySelectorAll('.bar')

        function toggleHamburger() {
            bars.forEach(bar => bar.classList.toggle('x'))
        }

        triggerEl.addEventListener("click", toggleHamburger);
        navToggleEl.addEventListener("click", toggleHamburger);
        inicioMenuEl.addEventListener("click", toggleHamburger);
        sobreMenuEl.addEventListener("click", toggleHamburger);
        portfolioMenuEl.addEventListener("click", toggleHamburger);
        contatoMenuEl.addEventListener("click", toggleHamburger);
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
                            <a class="nav-toggle">
                                <span class="bar"></span>
                                <span class="bar"></span>
                                <span class="bar"></span>
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