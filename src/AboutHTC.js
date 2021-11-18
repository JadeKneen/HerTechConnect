import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, Content2Xl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
//import GitHubButton from "react-github-btn";

import { LogoLink } from "components/headers/light.js";
import { SectionHeading as HeadingBase } from "components/misc/Headings";
import { SectionDescription as DescriptionBase } from "components/misc/Typography";

import logo from "images/logo.svg";
import Profile from "BeforeLaunch/Profile.js"
import MissionStatement from "BeforeLaunch/MissionStatement.js";

/*button*/
const Button = styled.button`
  background-color: rgb(121,70,221);
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;
/* Hero */
const Row = tw.div`flex`;
const NavRow = tw(Row)`flex flex-col lg:flex-row items-center justify-between`;
const NavLink = tw.a`mt-4 lg:mt-0 transition duration-300 font-medium pb-1 border-b-2 lg:mr-12 last:mr-0 text-gray-700 border-gray-400 hocus:border-gray-700 `;
const PrimaryNavLink = tw(
  NavLink
)`text-gray-100 bg-primary-500 px-6 py-3 border-none rounded hocus:bg-primary-900 focus:shadow-outline`;
const HeroRow = tw(Row)`max-w-xl flex-col justify-between items-center py-20 lg:py-24 mx-auto`;

const Heading = tw(HeadingBase)`text-center text-primary-900 leading-snug`;
const Description = tw(DescriptionBase)`mt-4 text-center lg:text-base text-gray-700 max-w-lg mx-auto lg:mx-0`;

export default () => {
  /*
   * Using gtag like this because we only want to use Google Analytics when Main Landing Page is rendered
   * Remove this part and the the gtag script inside public/index.html if you dont need google analytics
   */
  window.gtag("js", new Date());
  window.gtag("config", "UA-45799926-9");

  const downloadUrl = "/treact-ui.zip"
  React.useEffect(() => {
    var iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = downloadUrl
    document.body.appendChild(iframe);
  }, [])

  return (
    <AnimationRevealPage disabled>
      <Container tw="-mx-8 -mt-8 pt-8 px-8">
            <Heading> About Us</Heading>
             <HeroRow> 
			           <Description>
					   HerTechConnect is a social enterprise dedicated to help women break through barriers to start careers in the technology industry and advance diversity and inclusivity.  
					   </Description>
						<div className="logo">
							<img src={logo} alt="Logo for HerTechConnect"></img>
						</div>
						<Description>
							HerTechConnect started with an idea from a group of women who came together to celebrate International Women's Day 2021 with a hackathon. 
							Motivated by that weekend, we decided to take the leap and set up our own business. 
							HerTechConnect Ltd was registered in July 2021, with headquarters at Manchester, England.
						</Description>
						<Profile/> 
						<Description>
					     We ‘connect’ women who are looking for career advice and inspiration in tech-related careers to mentors with professional experience through our all-in-one platform which will launch in March 2022.
					   </Description>
						<div tw="mt-12 text-center">
						<MissionStatement/>
						</div>
						<div tw="mt-12 text-center">
							While we are in the early stages we are reaching out for help.
							If you would like to help with our initial research check out our survey here:&nbsp;
						</div>
						<div tw="mt-12 text-center">
						<a href="https://forms.gle/4ptsui5h8k72AoQVA">
						<button> User Survey </button>
						</a>
						</div>
						<div tw="mt-12 text-center">
						For anyone interested in helping, either with building the platform, volunteering as a mentor or signing up as a mentee reach out to our team.
						You can keep up to date with our social media, blog and we even have a newsletter you can subscribe to!
						</div>
						<div tw="mt-12 text-center">
						<a href="/components/innerPages/ContactUsPage">
						<button>Contact Us</button>
						</a>
						</div>
			    </HeroRow>
      </Container>
    </AnimationRevealPage>
  );
};
