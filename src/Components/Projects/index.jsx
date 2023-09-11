import React from "react";
import styled from "styled-components"
import SliderComp from "./Slider";
import { CyanText} from "../UI/textStyles"
import { white,cyanShadowText} from "../UI/Color"

const Container = styled.section`
    width: 80%;
    color: ${white};
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 0;
    text-align: center;
    font-weight: bold;
    @media(max-width: 840px){
        width: 90%;
    }

    h1 {
        font-size: 3rem;
        font-family: 'Inter', sans-serif;
        font-weight: bold;
        text-shadow: ${cyanShadowText} 0px 0px 10px;


        @media screen and (max-width:500px){
            font-size: 2rem;
        }

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
    }

    p{
        font-family: 'Inter', sans-serif;
        font-weight: 200;
        width: 28rem;
        margin: 0 auto;
        padding: 1rem 0;
        font-size: 1rem;
        @media(max-width : 500px){
            width: 90%;
        }
    }
`

const Slide = styled.div`

`


const Carousel = () => {
    return (
        <Container>
            <h1>Projetos <CyanText>Recentes</CyanText></h1>
            <p>Projetos acadêmicos e profissionais que foram desenvolvidos ao decorrer do aprendizado.</p>
            <Slide>
                <SliderComp />
            </Slide>
        </Container>
    )
}

export default Carousel;
