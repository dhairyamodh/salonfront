import React from 'react'
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { Button } from 'components/button/button';
import { ArrowNext } from 'assets/icons/ArrowNext';


const HeaderContainer = styled.div`
width: 100%;
  display: flex;
  justify-content: space-between;
  align-items:center;
margin-bottom: 30px;
@media only screen and (max-width: 990px) {
  margin-bottom: 10px;
  padding:0 20px;
}
`;

const HeaderWrapper = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
align-items:flex-start;
`;

export const HeaderSubTitle = styled.h5`
  color: ${themeGet("colors.secondary.regular")};
  text-transform: uppercase;
margin-bottom: 10px;
`;

export const MobileHeaderSubTitle = styled.h6`
  color: ${themeGet("colors.secondary.regular")};
  text-transform: uppercase;
`;

function HeadingTitle({ title, subTitle, deviceType: { desktop, tablet, mobile }, buttonText, buttonOnClick }) {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        {mobile ? <MobileHeaderSubTitle>{subTitle}</MobileHeaderSubTitle> : <HeaderSubTitle>{subTitle}</HeaderSubTitle>}
        {mobile ? <h5>{title}</h5> : <h3>{title}</h3>}
      </HeaderWrapper>

      {buttonText && (mobile ?
        <ArrowNext onClick={buttonOnClick} />
        : <Button variant="secondary" onClick={buttonOnClick}>
          {buttonText}<ArrowNext style={{ marginLeft: 5 }} onClick={buttonOnClick} />
        </Button>)}
    </HeaderContainer>
  )
}

export default HeadingTitle
