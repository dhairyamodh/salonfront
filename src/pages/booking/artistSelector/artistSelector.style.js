import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { Row as Rows, Col as Cols } from 'react-styled-flexboxgrid';

const ArtistContainer = styled.div((props) =>
  css({
    width: '100%',
    display: 'grid',
    gridGap: '30px',
    '@media screen and (max-width: 990px)': {
      display: 'flex', gridGap: '20px', paddingBottom: 20
      // gridTemplateColumns: 'repeat(1, minmax(48vw, 1fr))',
    },

    '@media screen and (min-width: 991px)': {
      gridTemplateColumns: 'repeat(2, minmax(300px, 1fr))',
    },

    '@media screen and (min-width: 1200px)': {
      gridTemplateColumns: 'repeat(3, minmax(300px, 1fr))',
    },
  })
);


const Title = styled.h3`
  font-size: ${themeGet('fontSizes.lg', '21')}px;
  font-weight: ${themeGet('fontWeights.semiBold', '600')};
  color: ${themeGet('colors.text.bold', '#0D1136')};
  margin-bottom: 10px;
`;

const SubTitle = styled.p`
  font-size: ${themeGet('fontSizes.base')}px;
  font-weight: ${themeGet('fontWeights.medium')};
  color: ${themeGet('colors.gray.950', '#0D1136')};
`;

const ArtistCard = styled.div`
width:100%;
padding: 20px;
border-radius:${themeGet('radii.big')};
cursor:pointer;
  background-color:${themeGet('colors.gray.300')};
  transition: 0.2s all ease-in-out;
  &:hover{
    
    background: ${themeGet('colors.primary.regular')};
    ${Title}{
      color:#fff;
    }
    ${SubTitle}{
      color:#fff;
    }
  }
  ${({ active }) => {
    if (active) {
      return css`
      background: ${themeGet('colors.primary.regular')};
      ${Title}{
        color:#fff;
      }
      ${SubTitle}{
        color:#fff;
      }
    `
    }
  }}
`;



export { Title, ArtistContainer, ArtistCard, SubTitle };
