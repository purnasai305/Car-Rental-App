import React from "react";
import {
  FooterContainer,
  FooterHeading,
  FlexContainer,
  Stack,
  FooterLink,
  Divider,
  FooterText,
} from "./FooterCss";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterHeading>CAR RENTAL SERVICES IN INDIA</FooterHeading>
      <FlexContainer>
        <Stack>
          <FooterLink href={'#'}>Self Drive Cars In Bangalore</FooterLink>
          <FooterLink href={'#'}>Self Drive Cars In Chennai</FooterLink>
          <FooterLink href={'#'}>Self Drive Cars In Ahmedabad</FooterLink>
          <FooterLink href={'#'}>Self Drive Cars In Mangalore</FooterLink>
          <FooterLink href={'#'}>Self Drive Cars In Nagpur</FooterLink>
          <FooterLink href={'#'}>Self Drive Cars In Bhopal</FooterLink>
          <FooterLink href={'#'}>Self Drive Cars In Vadodara</FooterLink>
          <FooterLink href={'#'}>Self Drive Cars In Madurai</FooterLink>
        </Stack>
        <Stack>
          <FooterLink href={'#'}>Self Drive Cars In Pune</FooterLink>
          <FooterLink href={'#'}>Self Drive Cars In Hyderabad</FooterLink>
          <FooterLink href={'#'}>Self Drive Cars In Coimbatore</FooterLink>
          <FooterLink href={'#'}>Self Drive Cars In Mysore</FooterLink>
          <FooterLink href={'#'}>Self Drive Cars In Kochi</FooterLink>
          <FooterLink href={'#'}>Self Drive Cars In Lucknow</FooterLink>
          <FooterLink href={'#'}>Self Drive Cars In Nashik</FooterLink>
        </Stack>
        <Stack>
          <FooterLink href={'#'}>Self Drive Cars In Bangalore</FooterLink>
          <FooterLink href={'#'}>Self Drive Cars In Chennai</FooterLink>
          <FooterLink href={'#'}>Self Drive Cars In Ahmedabad</FooterLink>
          <FooterLink href={'#'}>Self Drive Cars In Mangalore</FooterLink>
          <FooterLink href={'#'}>Self Drive Cars In Nagpur</FooterLink>
          <FooterLink href={'#'}>Self Drive Cars In Bhopal</FooterLink>
          <FooterLink href={'#'}>Self Drive Cars In Vadodara</FooterLink>
          <FooterLink href={'#'}>Self Drive Cars In Madurai</FooterLink>
        </Stack>
      </FlexContainer>
      <FooterHeading>UPCOMING CAR RENTAL AT AIRPORTS IN INDIA</FooterHeading>
      <FlexContainer>
        <Stack>
          <FooterLink href={'#'}>Self Drive Cars in Bangalore Airport</FooterLink>
          <FooterLink href={'#'}>Self Drive Cars in Kochi Airport</FooterLink>
          <FooterLink href={'#'}>Self Drive Cars in Kolkata Airport</FooterLink>
          <FooterLink href={'#'}>Self Drive Cars in Pune Airport</FooterLink>
        </Stack>
        <Stack>
          <FooterLink href={'#'}>Self Drive Cars in Delhi Airport</FooterLink>
          <FooterLink href={'#'}>Self Drive Cars in Mumbai Airport</FooterLink>
          <FooterLink href={'#'}>Self Drive Cars in Goa Airport</FooterLink>
        </Stack>
        <Stack>
          <FooterLink href={'#'}>Self Drive Cars in Hyderabad Airport</FooterLink>
          <FooterLink href={'#'}>Self Drive Cars in Guwahati Airport</FooterLink>
          <FooterLink href={'#'}>Self Drive Cars in Chennai Airport</FooterLink>
        </Stack>
      </FlexContainer>
      <Divider />
      <FooterText>
        By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy, and Content Policies. All trademarks are properties of their respective owners. 2012-2022 © Zoomcar™ Ltd. All rights reserved.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
