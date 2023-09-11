import React, { useState } from "react";
import styled from "styled-components"
import { cyan300, white, background, black} from "../UI/Color"

const StyledHeader = styled.header`
    box-shadow: 0 1px 2px;
    background: ${background};
    box-shadow: 0px 0px 20px ${black};
    position: fixed;
    width: 100%;
    z-index: 1;
    border-bottom: 1px solid white;
`

const NavCenter = styled.nav`
    @media screen and (min-width: 800px) {
        align-items: center;
        display: flex;
        justify-content: space-around;
        max-width: 1170px;
        margin: 0 auto;
        padding: 5px 0px 5px 150px;
    }
`

const NavHeader = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    padding: 15px;

    @media screen and (min-width: 800px) {
        .nav-header {
        padding: 0;
        }
    }
`

const BtnNavBar = styled.button`
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    color: ${white};
    cursor: pointer;
    transition: 1s;

    @media screen and (min-width: 800px) {
        display: none;
    }

`
const Links = styled.ul`
    list-style-type: none;
    font-family: 'Inter', sans-serif;
    height: 0;
    overflow: hidden;
    transition: 1s;

    height: ${props => (props.showLinks ? '200px' : '0')};
    transition: height 0.5s ease-in-out;


    @media screen and (min-width: 800px) {
        display: flex;
        height: auto;
    }
`

const HeaderMainLink = styled.a`
    color: ${white};
    display: block;
    font-size: 18px;
    font-weight: bold;
    font-family: 'Inter', sans-serif;
    padding: 10px 10px;
    text-decoration: none;
    transition: 1s;

    &:hover {
        color: ${cyan300};
        transition: 1s;
      }
`

const SocialIcons = styled.ul`
    display: none;
    font-size: 40px;
    
    @media screen and (min-width: 800px) {
        display: flex;
        color: ${white};
    }

    li a {
        &:hover {
            color: ${cyan300};
            transition: 1s;
        }

        @media screen and (min-width: 800px) {
            color: ${white};
            margin: 0 0.5rem;
            transition: var(--transition);
        }      
      }
`

const LogoText = styled.p`
    color: white;
    font-weight: bold;
    font-size: 25px;
    font-family: 'Inter', sans-serif;
`

const Header = () => {
    const [showLinks, setShowLinks] = useState(false);
    return (
        <StyledHeader>
            <NavCenter>
                <NavHeader>
                    <BtnNavBar id="navbar-toggle" onClick={() => setShowLinks(!showLinks)}>
                        <i className="fas fa-bars"></i>
                    </BtnNavBar>
                    <LogoText>{"< AV DEV />"}</LogoText>
                </NavHeader>
                <Links id="navbar-link" showLinks={showLinks}>
                    <li><HeaderMainLink href="#main">Início</HeaderMainLink></li>
                    <li><HeaderMainLink href="#sobre">Sobre mim</HeaderMainLink></li>
                    <li><HeaderMainLink href="#habilidades">Habilidades</HeaderMainLink></li>
                    <li><HeaderMainLink href="#projetos">Projetos</HeaderMainLink></li>
                </Links>
                <SocialIcons>
                    <li>
                        <a href="https://www.linkedin.com/in/allan-victor-dos-s-feitosa-5494b0248/" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/allansf29" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://api.whatsapp.com/send?phone=5511939471008" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-whatsapp"></i>
                        </a>
                    </li>
                </SocialIcons>
            </NavCenter>
        </StyledHeader>
    )
}

export default Header;