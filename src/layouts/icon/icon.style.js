import styled from 'styled-components';
import css from '@styled-system/css';
export const IconBox = styled.span(
  css({
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
  })
);

export const IconImage = styled.img({
  width: 40,
  height: 40,
  border: '1px solid transparent',
  borderRadius: 200,
  objectFit: 'cover'
});
