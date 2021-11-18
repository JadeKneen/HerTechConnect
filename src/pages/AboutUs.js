import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
//import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
//import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";
import Profile from 'BeforeLaunch/Profile'
import MissionStatement from 'BeforeLaunch/MissionStatement';
import TeamIllustrationSrc from "images/team-illustration.svg";
import PrototypeIllustrationSrc from "images/prototype-illustration.svg";

//import SupportIconImage from "images/support-icon.svg";
//import ShieldIconImage from "images/shield-icon.svg";
//import CustomerLoveIconImage from "images/simple-icon.svg";
import logo from "images/logo.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading>About HerTechConnect</Subheading>}
        heading="Connect Inspire Support"
		description="HerTechConnect is a social enterprise dedicated to help women break through barriers to start careers in the technology industry and advance diversity and inclusivity. For anyone interested in helping, either with building the platform, volunteering as a mentor or signing up as a mentee reach out to our team. You can keep up to date with our social media, blog and we even have a newsletter you can subscribe to!"
        buttonRounded={false}
        primaryButtonText="Contact Us"
		primaryButtonUrl="/components/innerPages/ContactUsPage"
        imageSrc={logo}
      />
	  <MissionStatement/>
      <MainFeature1
        subheading={<Subheading>Our Team</Subheading>}
        heading="Get to know us"
        description="HerTechConnect started with an idea from a group of women who came together to celebrate International Women's Day 2021 with a hackathon. Motivated by that weekend, we decided to take the leap and set up our own business. HerTechConnect Ltd was registered in July 2021, with headquarters at Manchester, England. While we are in the early stages we are reaching out for help. If you would like to help with our initial research check out our survey here: "
		buttonRounded={false}
		imageSrc={TeamIllustrationSrc}
		primaryButtonText="User Survey"
		primaryButtonUrl="https://forms.gle/4ptsui5h8k72AoQVA"
      />
	  <Profile/> 	  
	  <MainFeature1
        subheading={<Subheading>Our Vision</Subheading>}
        heading="Launching soon!"
		description="We ‘connect’ women who are looking for career advice and inspiration in tech-related careers to mentors with professional experience through our all-in-one platform which will launch in March 2022."
        buttonRounded={false}
        imageSrc={PrototypeIllustrationSrc}
        textOnLeft={false}
		primaryButtonText="Blog"
		primaryButtonUrl="https://blog.hertechconnect.com/"
      />
      <Footer />
    </AnimationRevealPage>
  );
};
