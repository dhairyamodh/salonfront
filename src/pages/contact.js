import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from '@redq/reuse-modal';
import { Row as Rows, Col as Cols } from 'react-styled-flexboxgrid';


import {
  HeadingTitle
} from 'assets/styles/pages.style';
import { themeGet } from "@styled-system/theme-get";

import {
  MainContentArea,
  SidebarSection,
  ContentSection,
  MobileCarouselDropdown,
} from 'assets/styles/services.style';
import { Button } from "components/button/button";
import { Input, Textarea } from "components/forms/input";
// import { UPDATE_ME } from 'graphql/mutation/me';
import { FormattedMessage } from "react-intl";
import { Label } from "components/forms/label";
import { useDispatch } from 'react-redux';
import Mobile from '../assets/icons/mobile';
import Clock from '../assets/icons/clock';
import Location from '../assets/icons/location';

const Row = styled(Rows)`
  // margin-bottom: 40px;

  @media only screen and (min-width: 0em) and (max-width: 47.99em) {
    margin-bottom: 30px;
  }
`;

const Col = styled(Cols)`
margin-bottom: 20px;
  @media only screen and (min-width: 0em) and (max-width: 47.99em) {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Map = styled.iframe`
  border:none;
  border-radius:${themeGet("radii.big", "6px")};
  width:100%;
  height:100%;
  margin-bottom: 40px;
  
  @media (max-width: 990px) {
    padding: 0 20px;
  }
`;

const Heading = styled.h3`
  font-size: 21px;
  font-weight: 700;
  color: #0d1136;
  line-height: 1.2;
  margin-bottom: 25px;
  width: 100%;
  color: ${themeGet('colors.primary.regular', '#0D1136')};
  padding-bottom: 25px;
  border-bottom:1px solid ${themeGet('colors.gray.700')};
`;

const Title = styled.p`
  color: #0d1136;
  font-size: ${themeGet('fontSizes.md', '21')}px;
  line-height: 1.2;
  margin-bottom: 10px;
  width: 100%;
  color: ${themeGet('colors.text.bold', '#0D1136')};
  font-weight: ${themeGet('fontWeights.semiBold', '600')};
  text-align:center;
`;

const SubTitle = styled.p`
  color: #0d1136;
  color: ${themeGet('colors.gray.950', '#0D1136')};
  font-size: ${themeGet('fontSizes.base', '21')}px;
  line-height: 2;
  margin-bottom: 25px;
  font-weight: ${themeGet('fontWeights.small')};

  width: 100%;
  text-align:center;
`;

const ContactPageWrapper = styled.div`
  position: relative;
  width:100%;
  padding: 20px 0 60px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`;

export const HelpPageContainer = styled.div`
  background-color: transparent;
  padding: 0;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  @media (max-width: 990px) {
    width: 870px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 989px) {
    padding: 30px;
  }
`;

const ContactDetailsContainer = styled.div`
  
  width:100%;
  display: flex;
  justify-content: space-evenly;
  align-items:center;
  margin-bottom: 25px;
  @media (max-width: 989px) {
    display: block;
  }
`;

const ContactCard = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;

`;

const Icon = styled.div` 
color: ${themeGet('colors.primaryLight.regular', '#0D1136')};
padding: 20px 0;
`;

export default function () {

  const [state, setState] = useState({})

  const dispatch = useDispatch()
  const handleChange = (e) => {
    const { value, name } = e.target;
    setState({ ...state, [name]: value })
  };

  const handleSave = async () => {

  };


  return (
    <Modal>
      <MainContentArea>
        <HeadingTitle>Contact</HeadingTitle>
        <ContactPageWrapper>
          <ContactDetailsContainer>
            <ContactCard>
              <Icon>
                <Mobile />
              </Icon>
              <Title>Contact</Title>
              <SubTitle>T: (860) 436 9919
                <br />info@thebrowshapers.com</SubTitle>
            </ContactCard>
            <ContactCard>
              <Icon>
                <Clock />
              </Icon>
              <Title>Hours</Title>
              <SubTitle>Monday – Friday 10 am to 7 pm<br />
                Saturday 10 am to 6 pm<br />
                Sunday 11 am to 4 pm
              </SubTitle>
            </ContactCard>
            <ContactCard>
              <Icon>
                <Location />
              </Icon>
              <Title>Location</Title>
              <SubTitle>1880 Silas Deane Hwy,
                <br /> Rocky Hill,CT 06067</SubTitle>
            </ContactCard>
          </ContactDetailsContainer>
          {/* <Col xs={12} sm={6} md={6} lg={6}>
            <Heading>Contact details</Heading>

            <Title>Address</Title>
            <SubTitle>1880 Silas Deane Hwy, Rocky Hill, CT 06067</SubTitle>
            <Title>Phone</Title>
            <SubTitle>(860) 436 9919</SubTitle>
            <Title>Email</Title>
            <SubTitle>info@thebrowshapers.com</SubTitle>

          </Col>
          <Col xs={12} sm={6} md={6} lg={6}>
            <Heading>Timing</Heading>


            <SubTitle>Monday – Friday 10 am to 7 pm</SubTitle>
            <SubTitle>Saturday 10 am to 6 pm</SubTitle>
            <SubTitle>Sunday 11 am to 4 pm</SubTitle>
          </Col> */}
          <Row>

            <Col xs={12} sm={6} md={6} lg={6}>

              <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190572.22991330418!2d-72.6177545!3d41.727184199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x597d4a50c1d828bd!2sUnique%20Eyebrow%20Threading!5e0!3m2!1sen!2sca!4v1627480316137!5m2!1sen!2sca" allowfullscreen="" loading="lazy"></Map>


            </Col>

            <Col xs={12} sm={6} md={6} lg={6}>
              <Row style={{ padding: '0 20px', paddingTop: 20 }}>



                <Heading>Get In Touch</Heading>
                <Col xs={12}>
                  <Label>
                    <FormattedMessage
                      id="profileNameField"
                      defaultMessage="Your Name"
                    />
                  </Label>
                  <Input
                    type="text"
                    label="Name"
                    name="name"
                    value={state.name}
                    onChange={handleChange}
                    backgroundColor="#F7F7F7"
                    height="48px"
                    required
                  // intlInputLabelId="profileNameField"
                  />
                </Col>

                <Col xs={12}>
                  <Label>
                    <FormattedMessage
                      id="profileEmailField"
                      defaultMessage="Your Email"
                    />
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    label="Email Address"
                    value={state.email}
                    required
                    onChange={handleChange}
                    backgroundColor="#F7F7F7"
                  />
                </Col>

                <Col xs={12}>
                  <Label>
                    <FormattedMessage
                      id="profileEmailField"
                      defaultMessage="Your Email"
                    />
                  </Label>
                  <Input
                    type="number"
                    name="mobile"
                    label="Mobile Number"
                    value={state.mobile}
                    required
                    onChange={handleChange}
                    backgroundColor="#F7F7F7"
                  />
                </Col>

                <Col xs={12}>
                  <Label>
                    <FormattedMessage
                      id="profileAddressField"
                      defaultMessage="Message"
                    />
                  </Label>
                  <Textarea
                    name="message"
                    label="Message"
                    value={state.message}
                    onChange={handleChange}
                    backgroundColor="#F7F7F7"
                    rows="2"
                  />
                </Col>

                <Col xs={12} >
                  <Button size="big" style={{ width: "100%" }} onClick={handleSave}>
                    <FormattedMessage id="contactSendBtn" defaultMessage="Send" />
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </ContactPageWrapper>

      </MainContentArea>


    </Modal >
  );
}
