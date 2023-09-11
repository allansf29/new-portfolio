import React from "react";
import styled, { keyframes }from "styled-components";
import pcImage from "../../assets/Images/img-pc.png"
import { cyan300, white, purple, cyanShadowText, whiteShadowText } from "../UI/Color"

const rotate = keyframes`
    0% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-30px);    
    }
    100% {
        transform: translateY(0PX);
    }
`;

const HomePageSection = styled.section`
    align-items: center; 
    background-size: cover;
    display: flex;
    height: 97vh;
    padding: 20px 0;   
`
const HomePageContainer = styled.div`
    align-items: center;
    color: ${white};     
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    width: 80%;


    @media screen and (max-width:799px){
            display: flex;
            flex-direction: none;    
            justify-content: center;
        }
`

const HomePageImage = styled.img`
    animation: float 20s ease-in-out infinite;
    border-radius: 45px;
    transform: translateY(0px);
    width: 450px;
    animation: ${rotate} 40s linear infinite;

    @media screen and (max-width:1300px){
            width: 350px;
      }

    @media screen and (max-width:1050px){
            width: 250px;
      }

    @media screen and (max-width:800px){
            width: 0px;
      }
`

const HomePagePresentation = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (max-width:799px){
        display: flex;
        align-items: center;
      }

    &:active {
        color: ${purple};
        transition: 3s;
    }
`

const HomePagePresentationText = styled.p`

    &.Presentation {
        font-family: 'Inter', sans-serif;
        font-size: 80px;
        text-shadow: ${whiteShadowText} 0px 0px 10px;
        margin-bottom: 1rem;
        font-weight: bold;

        @media screen and (max-width:1300px){
        font-size: 60px;
      }

      @media screen and (max-width:799px){
        width: none;
      }

        @media screen and (max-width:540px){
        font-size: 55px;
      }

    }

    &.Name-Presentation {
        font-family: 'Inter', sans-serif;
        font-size: 40px;
        color: ${cyan300};
        text-shadow: ${cyanShadowText} 0px 0px 10px;
        margin-bottom: 2rem;

        border-right: 4px solid;
        width: 13.5ch;
        white-space: nowrap;
        overflow: hidden;
        animation: typing 2s steps(20), 
        blinking 0.5s infinite step-end alternate;

        @keyframes typing {
            from{
                width: 0;
            }

        }

        @keyframes blinking {
            50% {
                border-color: transparent;
            }
        }

        @media screen and (max-width:1300px){
        font-size: 35px;
      }

        @media screen and (max-width:540px){
        font-size: 40px;
      }
        
    }

    &.textPresentation{
        font-family: 'Inter', sans-serif;
        color: ${white};
        font-size: 17px;
        width: 60%;

        @media screen and (max-width:1530px){
        font-size: 15px;
        width: 80%;
      }

        @media screen and (max-width:1300px){
        font-size: 15px;
        width: 70%;
      }

        @media screen and (max-width:799px){
        width: 100%;
        text-align: center;
      }

      
    }

`

const HomePage = () => {
    return (
        <HomePageSection id="main">
            <HomePageContainer>
                <HomePagePresentation data-anime="right">
                    {[
                        { text: "<Allan Victor", className: "Presentation" },
                        { text: 'Web Developer/>', className: "Name-Presentation" },
                        { text: 'Olá e bem-vindos ao meu portfólio! Aqui, você encontrará um pouco sobre mim, minhas habilidades e uma visão detalhada dos projetos emocionantes em que tenho trabalhado. Sinta-se à vontade para explorar as páginas de "Sobre Mim", "Habilidades" e "Projetos" para conhecer melhor meu percurso e realizações.', className: "textPresentation"}
                    ].map((item, index) => (
                        <HomePagePresentationText key={index} className={item.className}>
                            {item.text}
                        </HomePagePresentationText>
                    ))}
                </HomePagePresentation>
                <HomePageImage src={pcImage} alt="LOGO" data-anime="left" />
            </HomePageContainer>
        </HomePageSection>
    )
}

export default HomePage;