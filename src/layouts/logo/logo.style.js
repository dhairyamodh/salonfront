import styled from 'styled-components';
import css from '@styled-system/css';
export const LogoBox = styled.span(
  css({
    color: 'text.bold',
    fontSize: 26,
    fontWeight: 'bold',
    cursor: 'pointer',
    mr: [0, 20, 40],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  })
);

export const LogoImage = styled.img({
  display: 'block',
  backfaceVisibility: 'hidden',
  width: 65,
  '@media screen and (max-width: 990px)': {
    width: 50,

  },
});
