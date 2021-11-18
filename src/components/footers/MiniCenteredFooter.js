import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {Container as ContainerBase } from "components/misc/Layouts.js"
import logolight from "../../images/logo-white.png";
import { ReactComponent as InstagramIcon } from "../../images/instagram-icon.svg" ;
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon } from "../../images/linkedin-icon.svg";

const Container = tw(ContainerBase)`bg-purple-900 text-gray-100 -mx-8 -mb-8`

const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`
export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logolight} />
            <LogoText>HerTechConnect</LogoText>
          </LogoContainer>
          <LinksContainer>
            <Link href="http://hertechconnect.com/">Home</Link>
            <Link href="/components/innerPages/AboutUsPage">About</Link>
            <Link href="https://blog.hertechconnect.com/">Blog</Link>
            <Link href="https://forms.gle/4ptsui5h8k72AoQVA" target="_blank">User Survey</Link>
            <Link href="/components/innerPages/ContactUsPage">Contact Us</Link>
          </LinksContainer>
          <SocialLinksContainer>
            <SocialLink href="https://www.linkedin.com/company/hertechconnect">
              <LinkedinIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com/hertechconnect">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://www.instagram.com/hertechconnect/">
              <InstagramIcon />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            &copy; Copyright 2021, HerTechConnect LLC. All Rights Reserved.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};