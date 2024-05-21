import styled from "styled-components";

export const NavbarStyled = styled.nav`

width: 100%;
height: 67px;
background-color: #272626;
margin-top: 0px;
display: flex;
justify-content: space-between;
border-bottom: 2px solid #EFE;
position: fixed;
list-style-type: none;

.logoName {
    display: flex;
    margin-left: 4rem;
    align-items:center;
}

.menuDesktop {
display: flex;
align-items: center;
margin: 0rem;
}

.liDesktop {
display: flex;
flex-direction: row;
margin-right: 2rem;
}

.trigger {
    display: none;
    color: #EFE;
    margin-right: 1.9rem;
}

ul {
    margin: 0;
    padding: 0;
}
li {
    text-decoration: none;
    list-style-type: none;
}

a {
    text-decoration: none;
    margin-left: 2rem;
}

h3 {
    margin: 0 0 0 0;
    font-size: 1rem;
    color: #EFE;
}

h1 {
    text-decoration: none;
    color: #EFE;
    font-size: 1.8rem;
    text-align: start;
    margin: 0;
}

.nav-toggle {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: .8rem;
  margin-left: 8px;
  margin-right: 12px;
  height: 23px;
  width: 28px;
}

.nav-toggle .bar {
  height: 3px;
  width: 100%;
  background-color: #EFE;
  transition: all 100ms ease-in-out;
}

.nav-toggle:hover {
  cursor: pointer;
}

.x:nth-of-type(1) {
  transition: all 100ms ease-in-out;
  transform: rotate(45deg);
  transform-origin: top left;
  width: 28px;
}

.x:nth-of-type(2) {
  transition: all 100ms ease-in-out;
  transform-origin: center;
  width: 0;
}

.x:nth-of-type(3) {
  transition: all 100ms ease-in-out;
  transform: rotate(-45deg);
  transform-origin: bottom left;
  width: 28px;
}

@media only screen and (max-width: 768px) {
  width: 100%;
  position: fixed;

    .menuDesktop {
        align-items: normal;
    }

     .liDesktop {
      display: none;
    }

    .liDesktop.isOpen {
        display: block;
        margin: 0;
        margin-top: .5rem;
        padding: 0.6rem .8rem 0.6rem .8rem;
        background-color: #39F;
        border-bottom-right-radius: 2rem;
        border-bottom-left-radius: 2rem;
    }

    a {
        margin: 0;
    }

    .liDesktop.isOpen a h3 {
        justify-content: center;
        color: #101010;
        font-size: 1.2rem;
        margin:.5rem 1rem 1.3rem 1rem;
        width: 80px;
    }

    .trigger {
        display: flex;
        align-items: center;
        margin-top: 12px;
        margin-left: 42px;
    }

}

@media only screen and (max-width: 425px) {
  h1 {
    font-size: 1.4rem;
  }
  .logoName {
    display: flex;
    margin-left: 3rem;
  }

  .liDesktop.isOpen a h3{
      font-size: .9rem;
    }
}
@media only screen and (max-width: 375px) {
  h1 {
    font-size: 1rem;
  }
  .logoName {
    display: flex;
    margin-left: 1.5rem;
  }
}
`;

