import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const GiftCardWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  display: flex;
  flex-direction: column;
`;
export const Img = styled('img')`
  position:absolute;
  border-radius:20px;
  width: 100%;
  height: 100%;
  object-fit:cover;
  top:0;
`;

export const GiftCardImageWrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 200px;
  max-height: 250px;
  position: relative;
  text-align: left;
  padding: 20px;
  border-radius: ${themeGet('radii.big')};
  overflow: hidden;
 
  background: linear-gradient(to top right, ${themeGet('colors.primary.regular')} 0%,${themeGet('colors.primaryLight.regular')} 100%); 
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 767px) {
    height: auto;
    max-height: 220px;
  }

  @media (max-width: 490px) {
    max-height: none;
  }
`;

export const CardInfo = styled.div`
  padding: 0px 15px;
`;


export const Discount = styled('h3')`
color: white;
@media only screen and (max-width: 990px) {
  font-size: 18px;
}
`;

export const Title = styled('p')`
padding: 10px 0;
color: ${themeGet('colors.gray.200',)};
@media only screen and (max-width: 990px) {
  font-size: 18px;
}
`;


export const Subtitle = styled('p')`
color: ${themeGet('colors.gray.500',)};
margin-top: 30px;
@media only screen and (max-width: 990px) {
  font-size: 12px;
}`;

export const CardContent = styled.div`
  background-color: ${themeGet('colors.gray.400', '#ffffff')};
  overflow: hidden;
  border: 1px solid ${themeGet('colors.gray.500', '#f1f1f1')};
  border-top: 0;
  border-bottom-left-radius: ${themeGet('radii.big')};
  border-bottom-right-radius: ${themeGet('radii.big')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;

export const GiftCode = styled.input`
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.text.bold', '#0D1136')};
  background-color: inherit;
  margin: 0;
  border: 0;
  outline: 0;
  padding: 0;
  width: 100%;

  @media (max-width: 767px) {
    font-size: calc(${themeGet('fontSizes.base', '15')}px - 1px);
  }
`;

export const CopyButton = styled.button`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 0;
  outline: 0;
  box-shadow: none;
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.secondary.regular')};
  padding: 0;
  cursor: pointer;
  flex-shrink: 0;
  line-height: 18px;
  white-space: nowrap;
  text-transform:uppercase;

  @media (max-width: 767px) {
    font-size: ${themeGet('fontSizes.xm', '12')}px;
  }
`;

export const CopySuccess = styled.span`
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  font-size: ${themeGet('fontSizes.sm', '13')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.secondary.regular')};
  line-height: 18px;
  white-space: nowrap;
`;
