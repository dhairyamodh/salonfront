import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { Row as Rows, Col as Cols } from 'react-styled-flexboxgrid';

const SettingsForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeadingSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
`;

const Title = styled.h3`
  font-family: ${themeGet('fonts.heading', 'sans-serif')};
  font-size: ${themeGet('fontSizes.lg', '21')}px;
  font-weight: ${themeGet('fontWeights.semiBold', '600')};
  color: ${themeGet('colors.text.bold', '#0D1136')};
`;

const SettingsFormContent = styled.div`
  margin-bottom: 50px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Row = styled(Rows)`
  margin-bottom: 40px;

  @media only screen and (min-width: 0em) and (max-width: 47.99em) {
    margin-bottom: 30px;
  }
`;

const Col = styled(Cols)`
  @media only screen and (min-width: 0em) and (max-width: 47.99em) {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const TimeSelectorWrapper = styled.div`
`;

const TimeSelectorContent = styled.div`
  display:grid;
  gap: 20px;
  width: 100%;
  grid-template-columns: repeat(6, minmax(180px, 1fr));
  @media (max-width: 990px) {
    grid-template-columns: auto auto auto;
  }
  padding: 10px;
  margin-bottom: 20px;
`;

const TimeSelectorLabel = styled.div`
  padding: 15px 10px;
  display:flex;
  justify-content:space-evenly;
  align-items:center;
  border-radius: 50px;
  cursor:pointer;
  font-weight: 600;
  background-color: #f5f5f5;
  transition: 0.2s all ease-in-out;
  &:hover {
    background: ${themeGet('colors.primary.regular')};
      color:#fff;
  }
  ${({ active }) => {
    if (active) {
      return css`
      background: ${themeGet('colors.primary.regular')};
      color:#fff;
    `
    }
  }}
`;

const RadioButton = styled.input`
  cursor:pointer;
`;

export { SettingsForm, HeadingSection, Title, SettingsFormContent, Col, Row, TimeSelectorContent, TimeSelectorLabel, RadioButton, TimeSelectorWrapper };
