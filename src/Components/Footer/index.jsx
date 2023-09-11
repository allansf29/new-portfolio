import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: rgba(0, 0, 0, 0);
  padding: 8px 0;
  width: 100%;
`;

const FooterContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
`;

const Email = styled.div`
  color: white;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  text-align: center;

  @media screen and (max-width:870px){
        font-size: 14px;
  }

  @media screen and (max-width:500px){
        font-size: 10px;
  }

  @media screen and (max-width:400px){
        font-size: 8px;
  }
`;

const Copyright = styled.div`
  color: white;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  text-align: center;

  @media screen and (max-width:870px){
        font-size: 14px;
      }

  @media screen and (max-width:500px){
        font-size: 10px;
  }

  @media screen and (max-width:400px){
        font-size: 8px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  justify-items: center;
`;

const SocialIconList = styled.ul`
  display: flex;
  font-size: 40px;

  @media screen and (max-width:870px){
        font-size: 30px;
      }
  
  @media screen and (max-width:500px){
        font-size: 20 px;
  }

  @media screen and (max-width:400px){
        font-size: 15px;
  }
`;

const SocialIconLink = styled.a`
  color: white;
  margin: 0 0.5rem;
  transition: blue;

  &:hover {
    color: white;
  }
`;

const SocialIcon = styled.i`

  &:hover {
    color: cyan;
    transition: 1s;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <Email>
          <p>allansf29@gmail.com</p>
        </Email>
        <Copyright>
          <p>&copy; Copyright Allanv29 - 2023.</p>
        </Copyright>
        <SocialIcons>
          <SocialIconList className="social-icons-footer">
            <li>
              <SocialIconLink href="https://www.linkedin.com/in/allan-victor-dos-s-feitosa-5494b0248/" target="_blank">
                <SocialIcon className="fa-brands fa-linkedin-in"></SocialIcon>
              </SocialIconLink>
            </li>
            <li>
              <SocialIconLink href="https://github.com/allansf29" target="_blank">
                <SocialIcon className="fab fa-github"></SocialIcon>
              </SocialIconLink>
            </li>
            <li>
              <SocialIconLink href="https://api.whatsapp.com/send?phone=5511939471008" target="_blank">
                <SocialIcon className="fab fa-whatsapp"></SocialIcon>
              </SocialIconLink>
            </li>
          </SocialIconList>
        </SocialIcons>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
