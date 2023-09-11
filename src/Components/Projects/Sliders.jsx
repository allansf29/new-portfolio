import React from "react";
import styled from "styled-components"
import { white, transparentGray, red} from "../UI/Color"

const Container = styled.div`
    height: 10rem;
    background-color: ${white};
    margin: 0 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    overflow: hidden;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 400ms ease-in-out;
    }

    .disc{
        position: absolute;
        right: 0;
        left: 0;
        bottom: -10rem;
        text-align: left;
        padding: 0.5rem;
        background-color: ${transparentGray};
        transition: all 400ms ease-in-out;

        h1{
            font-family: 'Inter', sans-serif;
            font-weight: bold;
            font-size: 1rem;
        }

        p{
            width: 90%;
            font-family: 'Inter', sans-serif;
            font-weight: 200;
            font-size: 0.8rem;
            color: ${white};
            font-weight: bold;
            a{
                margin-left: 0.4rem;
                color: ${red};
            }
        }
    }

    &:hover > img{
        transform: scale(1.3);
    }

    &:hover > .disc{
        bottom: 0;
    }

`

const Sliders = (props) => {
    const { imageSrc, descripton, link } = props.item;
    return (
        <Container className="project" id="projetos">
            <img src={imageSrc} alt="project" />
            <div className="disc" >
                <h2>Description</h2>
                <p>{descripton}
                    <a href={link} target="_blank" rel="noreferrer">Ver projeto</a>
                </p>
            </div>
        </Container>
    )
}

export default Sliders;

