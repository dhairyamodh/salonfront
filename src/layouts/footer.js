import styled from 'styled-components';
import css from '@styled-system/css';
const Box = styled.div(
  css({
    textAlign: 'center',
    padding: '20px 80px',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontFamily: 'body',
    fontSize: 'sm',
    fontWeight: 'regular',
    color: 'text.regular',
    display: 'flex',
    a: {
      color: 'primary.regular',
    },
    '@media (max-width: 990px)': {
      padding: '20px',
      display: 'block',

    },
  }),

);
const Footer = () => {
  return (
    <Box>
      <div>
        Copyright © 2021 The Brow shapers | All Rights Reserved
      </div>
      <div>
        Designed and Developed By&nbsp;
        <a href='#' target='_blank'>
          Iteration Technology
        </a>
      </div>



    </Box>
  );
};
export default Footer;
