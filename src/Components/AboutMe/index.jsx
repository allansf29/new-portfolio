import React from "react";
import styled from "styled-components"
import { CyanText} from "../UI/textStyles"
import { gray100, white, cyan500, cyanShadowText} from "../UI/Color"

const AboutMeSection = styled.section`
    border-top: 1px solid ${white};
    align-items: center;
    display: flex;
    min-height: 55vh;
    padding: 20px 0;

    @media screen and (max-width:700px){
      display: flex;
      flex-direction: column;
    }

    @media screen and (max-width:1050px){
      display: flex;
      flex-direction: column;
    }
`

const AboutMeContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
`

const AboutMeIcon = styled.i`
    color: ${cyan500};
    text-shadow: ${cyanShadowText} 0px 0px 10px;
    font-size: 200px;
    margin: 0px 100px 0px 100px;
    /* animation: spinAnimation 120s linear infinite; */

    @media screen and (max-width:1050px){
      font-size: 150px;
    }

    @media screen and (max-width:700px){
      
    }

    @keyframes spinAnimation {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
`

const AboutMeTitle = styled.h1`
    font-family: 'Inter', sans-serif;
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    text-shadow: ${cyanShadowText} 0px 0px 10px;
    color: ${white};

    /* border-right: 4px solid;
    margin: 0 auto;
    width: 9ch;
    white-space: nowrap;
    overflow: hidden;
    animation: typing 2s steps(9), 
    blinking 0.5s infinite step-end alternate; */

    @media screen and (max-width:1050px){
          margin: 10px;
          font-size: 50px;
    }

    @media screen and (max-width:700px){
          margin: 10px;
          font-size: 50px;
    }

`

const AboutMeText = styled.p`
    color: ${gray100};
    display: flex;
    flex-direction: column;
    font-family: 'Podkova', serif;
    font-size: 21px;
    margin: 20px 100px 20px 100px;
    padding: 0;
    text-align: center;
    text-indent: 30px;

  @media screen and (max-width:1500px){
        font-size: 19px;
        margin: 10px 15px;
}

  @media screen and (max-width:1200px){
        font-size: 17px;
        margin: 10px 15px;
}

  @media screen and (max-width:1050px){
        font-size: 17px;
        margin: 10px 10px;
}

  @media screen and (max-width:700px){
        font-size: 15px;
        margin: 10px 10px;
}
`


const AboutMe = () => {
  return (
    <AboutMeSection id="sobre">
      <AboutMeIcon className="fa-solid fa-id-card" alt="LOGO" data-anime="right"/><AboutMeIcon/>
      <AboutMeContainer>
        <AboutMeTitle data-anime="up">Sobre<CyanText> Mim</CyanText></AboutMeTitle>
        <AboutMeText data-anime="up">
          Olá! Sou Allan Victor, estudante de Análise e Desenvolvimento de Sistemas na UniCesumar. Atualmente, estou ampliando minhas habilidades em HTML, CSS, JavaScript, Bootstrap, Git e MySQL por meio de cursos na Alura e Udemy. Meu foco está em Front-End usando React, especialmente em criar interfaces dinâmicas com Styled Components. Estou em transição de carreira, ansioso para adquirir mais conhecimento e contribuir em projetos desafiadores. Este é meu portfólio, refletindo minha jornada e paixão pelo desenvolvimento de software.
        </AboutMeText>
      </AboutMeContainer>
    </AboutMeSection>
  )
}

export default AboutMe;