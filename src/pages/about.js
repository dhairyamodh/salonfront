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
} from 'assets/styles/services.style';
import AboutImg from '../assets/images/about.jpg'

const Row = styled(Rows)`
  // margin-bottom: 70px;

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

const Image = styled.img`
  border:none;
  border-radius:${themeGet("radii.big", "6px")};
  width:100%;
  height:auto;
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
  font-size: ${themeGet('fontSizes.base', '21')}px;
  line-height: 1.2;
  margin-bottom: 10px;
  width: 100%;
  color: ${themeGet('colors.text.bold', '#0D1136')};
  font-weight: ${themeGet('fontWeights.semiBold', '600')};
  
`;

const SubTitle = styled.p`
  color: #0d1136;
  font-size: ${themeGet('fontSizes.base', '21')}px;
  line-height: 1.7;
  margin-bottom: 25px;
  width: 100%;
  text-align:justify;
  
`;

const ContactPageWrapper = styled.div`
  position: relative;
  width:100%;
  padding: 20px 0 60px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`;


export default function () {

  return (
    <Modal>
      <MainContentArea>
        <HeadingTitle>About</HeadingTitle>
        <ContactPageWrapper>

          <Row>

            <Col xs={12} sm={4} md={4} lg={4}>

              <Image src={AboutImg} />


            </Col>

            <Col xs={12} sm={8} md={8} lg={8}>
              <Row style={{ padding: '0 20px' }}>
                <Col xs={12}>
                  <Heading>About Us</Heading>

                  <SubTitle>At Brow Shaper Salon our main priority is client’s satisfaction and providing best service to all of our guests. We guarantee perfection and satisfaction in our services. It is truly our honor and privilege to have you as our guest. It is our extreme desire to provide the highest quality services in the most pleasant environment. Our team of enthusiastic and professional estheticians is committed to providing you with a unique and unforgettable experience. You'll walk out of each session feeling fresh, rejuvenated, and renewed.
                  </SubTitle>
                  <Heading>Or Aim:</Heading>

                  <SubTitle>Our aim at Brow Mantra is to have our guests feel the satisfaction of being transformed into natural and classic beauties .Brow Manitra is not just a threading salon where both men and women can get rid of the unwanted facial hair, but also enjoy other hair removal and skin treatments.</SubTitle>
                </Col>
              </Row>
            </Col>


          </Row>

        </ContactPageWrapper>

      </MainContentArea>


    </Modal >
  );
}
