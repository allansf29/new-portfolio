import React from "react";
import styled from "styled-components"
import { CyanText} from "../UI/textStyles"
import { white, gray800, cyan500, cyan300, cyanTransparent, cyanShadowText } from "../UI/Color"


const MySkills = styled.section`
    align-items: center; 
    border-top: 1px solid ${white};
    border-bottom: 1px solid ${white};
    padding-bottom: 5rem;
    display: block;
    min-height: 80vh;
     

    @media screen and (max-width:700px){
        display: flex;
        flex-direction: column;
    }
`

const SkillsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1px;
    justify-content: center;
    width: 100%;
`
const SkillsTitle = styled.h2`
    color: ${white};
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    font-size: 3rem;
    padding: 80px 30px 30px 30px;
    text-align: center;
    text-shadow: ${cyanShadowText} 0px 0px 10px;
    width: 100%;
    
    
    @media screen and (max-width:700px){
        font-size: 27px;
    }

`

const SkillsCenter = styled.div`
    align-items: center;
    background: ${gray800};
    border-radius: 0px;
    box-shadow: 0px 0px 0px 2px ${cyanTransparent};
    display: flex;
    flex-direction: column;
    margin: 10px;
    width: calc(25.33% - 10px);
    height: 17rem;

    @media screen and (max-width:1480px){
        width: calc(43.33% - 10px);
      }

    @media screen and (max-width:870px){
        width: 90%;
      }

    @media screen and (max-width:400px){
        width: 95%;
    }

    i {
        margin: 1rem;
        color: ${cyan500};
        font-size: 100px;
        text-shadow: ${cyanShadowText} 0px 0px 10px;

        @media screen and (max-width:500px){
          font-size: 70px;
        }
    }
`

const SkillsName = styled.h3`
    color: ${cyan500};
    font-family: 'Podkova', serif;
    font-size: 22px;
    padding: 0px 5px 10px 5px;
    text-align: center;
`

const SkillsDescription = styled.p`
    color: ${white};
    font-family: 'Podkova', serif;
    font-size: 17px;
    height: 20%;
    padding: 0px 5px 15px 5px;
    text-align: center; 

    @media screen and (max-width:500px){
          font-size: 15px;
    }
`

const SkillsCertification = styled.a`
    color: ${cyan300};
    font-family: 'Fredericka the Great', cursive;
`

const SkillsData = [
  {
    icon: "fa-brands fa-html5",
    title: "HTML",
    descripton: "HTML: Hyper Text Markup Language, ou seja, linguagem de marcação de hipertexto.",
    link: "https://cursos.alura.com.br/user/allansf29/course/html5-css3-avancando-css/certificate",

  },

  {
    icon: "fa-brands fa-css3-alt",
    title: "CSS",
    descripton: "CSS: O Cascading Style Sheet tem a tarefa de separar o conteúdo do site de sua apresentação visual, alterando elementos como cor do texto.",
    link: "https://cursos.alura.com.br/user/allansf29/course/arquitetura-css/certificate",

  },

  {
    icon: "fa-brands fa-square-js",
    title: "JavaScript",
    descripton: "JAVASCRIPT (JS): É uma linguagem de programação utilizada principalmente em páginas web.",
    link: "https://cursos.alura.com.br/user/allansf29/course/javascript-programando-na-linguagem-web/certificate",

  },

  {
    icon: "fa-brands fa-react",
    title: "React",
    descripton: "ReactJS: É uma das bibliotecas de JavaScript mais populares para desenvolvimento de aplicativos web ou para dispositivos móveis, criado pelo Facebook.",
    link: "https://cursos.alura.com.br/user/allansf29/course/react-desenvolvendo-javascript/certificate",

  },

  {
    icon: "fa-brands fa-git-alt",
    title: "Git",
    descripton: "Git: É usado para controlar o histórico de alterações de arquivos e principalmente de projetos de desenvolvimento de software. ",
    link: "https://cursos.alura.com.br/user/allansf29/course/git-github-repositorio-commit-versoes/certificate",

  },

  {
    icon: "fa-solid fa-code",
    title: "Certificado completo e outros cursos",
    descripton: "Styled Components, Bootstrap, Tailwind, Fisk English Course: Breaking Free, Spreding wings, Aiming at the sky. ",
    link: "https://cursos.alura.com.br/user/allansf29/fullCertificate/dab05699b518453ce6aeb17a7990d46d",

  },
 
]

const Skills = () => {
  return (
    <MySkills id="habilidades">
      <SkillsContainer data-anime="">
        <SkillsTitle>Habilidades <CyanText>Front-End</CyanText></SkillsTitle>
        {SkillsData.map((skill, index) => (
          <SkillsCenter key={index}>
            <i className={skill.icon}></i>
            <SkillsName>{skill.title}</SkillsName>
            <SkillsDescription>{skill.descripton}</SkillsDescription>
            <SkillsCertification href={skill.link} target="_blank">Certificado</SkillsCertification>
          </SkillsCenter>
        ))}

      </SkillsContainer>
    </MySkills>

  )
}

export default Skills;